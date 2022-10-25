const { Client, GatewayIntentBits } = require("discord.js");
const Discord = require("discord.js");

const mongoose = require("mongoose");
require("dotenv").config();

const components = require("./components/components");

const Wallet = components.walletSchema;
const cardChannel = "1031596602940456960";

const DiamondRole = [
  "1031593747353436170", //DTH 1
  "1031600479702097981", //DTH 2
  "1031600858217058465", //DTH 3
  "1033328648448639056", //DTH 4
  "1032575283703853056", //DTH 5
  "1031600839221055588", //DTH 6
  "1031601071744892988", //DTH 7
  "No role",
];

const dthSubmitted = [
  "1031600023022088333", //DTHS 1
  "1031600659579023446", //DTHS 2
  "1031601083539263620", //DTHS 3
];

const client = new Discord.Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.on("ready", async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {
      keepAlive: true,
    })
    .then((m) => {
      console.log("Connected to DB");
    })
    .catch((err) => console.log(err));

  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  const cmd = message.content;
  if (cmd == "!callwalletsub" && message.author.tag == "djakozz#7269") {
    await client.channels.cache.get(cardChannel).send({
      components: [components.button],
    });
  }
});

client.on("interactionCreate", async (click) => {
  if (click.isButton()) {
    if (click.customId == "main_button") {
      const passenger = click.member.roles.cache;
      for (let i = 0; i < DiamondRole.length; i++) {
        if (passenger.has(DiamondRole[i])) {
          if (!passenger.has(dthSubmitted[0])) {
            await click.showModal(components.modal);
            return;
          }
        } else if (DiamondRole[i] == "No role") {
          await click.reply({
            content:
              "***Only a Diamond Ticket Holder can interact with this machine***",
            ephemeral: [true],
          });
        }
      }
    }
  }

  if (click.customId === "myModal") {
    // All info for database
    const email_response = click.fields.getTextInputValue("emailInput");
    const wallet_response = click.fields.getTextInputValue("walletInput");
    let member = click.guild.members.cache.get(click.user.id);
    let username = member.user.username;
    let discrim = member.user.discriminator;
    let tag = username + "#" + discrim;

    // Database schema
    const newWallet = await Wallet.create({
      discordId: click.user.id,
      discordTag: tag,
      email: email_response,
      wallet: wallet_response,
    });

    // Replacing Roles

    const replaceRoles = function (role) {
      member.roles.add(dthSubmitted[role]);
      member.roles.remove(DiamondRole[role]);
    };

    for (let i = 0; i < DiamondRole.length; i++) {
      if (member.roles.cache.has(DiamondRole[i])) {
        replaceRoles(0);
      }
    }
    // DTH Submitted = 1031600023022088333, DTH = 1031593747353436170

    // message accepted
    click.reply({
      content: `*Your information has been saved. Thank you!*`,
      ephemeral: true,
    });
  }
});

client.login(process.env.TOKEN);
