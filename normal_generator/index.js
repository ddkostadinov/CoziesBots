const { Client, GatewayIntentBits } = require("discord.js");
const Discord = require("discord.js");
const generateImage = require("./generateImage");

require("dotenv").config();

const components = require("./components/components");

const cardChannel = "1027224746552721499";
// const loggingChannel = "1021454453083226112"

const client = new Discord.Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

let bg = "lolxd";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  const cmd = message.content;
  if (cmd == "!callnormal" && message.author.tag == "djakozz#7269") {
    await client.channels.cache.get(cardChannel).send({
      content:
        "Engrave your name into a Diamond Ticket to prepare for your journey! <:diamond_ticket:1032587045404676116>",
      components: [components.button],
    });
  }
});

client.on("interactionCreate", async (click) => {
  if (click.isButton()) {
    if (click.customId == "main_button") {
      let member = click.guild.members.cache.get(click.user.id);

      bg = "https://i.imgur.com/fymG9Lf.png";
      exports.bg = bg;

      await click.showModal(components.modal);
    }
  }

  if (click.customId === "myModal") {
    const name_response = click.fields.getTextInputValue("nameInput");

    let member = click.guild.members.cache.get(click.user.id);

    exports.name_response = name_response;

    // generating banner
    const img = await generateImage(member);
    click.reply({
      content: `*The machine silently vibrates and produces a ticket directly into your hand. Don't cut yourself!*`,
      ephemeral: true,
      files: [img],
    });
  }
});

client.login(process.env.TOKEN);
