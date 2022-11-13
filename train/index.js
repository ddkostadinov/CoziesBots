const { MessageActionRow, MessageButton } = require("discord.js");
const { Client, Intents } = require("discord.js");

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
});

require("dotenv").config();

const trainNavigation = "1040542958308565012";
const passenger = "1013480942217728090";

const roles = {
  locomotive: "1040548727267528714",
  cozy: "1040548908805390356",
  studio: "1040548959686504528",
  arcade: "1040549008537563186",
  sleeper: "1040549050006638622",
  caboose: "1040549087172374528",
};

const locoAndCozy = new MessageActionRow().addComponents(
  new MessageButton()
    .setCustomId("locomotive")
    .setLabel("Locomotive")
    .setStyle("PRIMARY"),
  new MessageButton()
    .setCustomId("cozy")
    .setLabel("Cozy Wagon")
    .setStyle("PRIMARY")
);

const studioAndArcade = new MessageActionRow().addComponents(
  new MessageButton()
    .setCustomId("studio")
    .setLabel("Studio Wagon")
    .setStyle("SUCCESS"),
  new MessageButton()
    .setCustomId("arcade")
    .setLabel("Arcade Wagon")
    .setStyle("SUCCESS")
);

const sleeperAndCaboose = new MessageActionRow().addComponents(
  new MessageButton()
    .setCustomId("sleeper")
    .setLabel("Sleeper")
    .setStyle("SECONDARY"),
  new MessageButton()
    .setCustomId("caboose")
    .setLabel("Caboose")
    .setStyle("SECONDARY")
);

client.on("messageCreate", async (message) => {
  const cmd = message.content;

  if (cmd == "!wagons" && message.author.tag == "djakozz#7269") {
    await client.channels.cache
      .get(trainNavigation)
      .send({ components: [locoAndCozy, studioAndArcade, sleeperAndCaboose] });
  }
});

client.on("guildMemberAdd", async (member) => {
  member.roles.add(passenger);
  member.roles.add(roles.locomotive);
});

client.on("interactionCreate", async (click) => {
  //All interactions for Button Menu
  if (click.isButton()) {
    let member = click.guild.members.cache.get(click.user.id);
    for (const [role, id] of Object.entries(roles)) {
      if (member.roles.cache.has(id)) member.roles.remove(id);
      if (click.customId === `${role}`) {
        const [cap, ...rest] = click.customId;
        member.roles.add(id);
        click.reply({
          content: `You are now in the ${
            click.customId.length < 7
              ? cap.toUpperCase() + rest.join("") + " Wagon"
              : cap.toUpperCase() + rest.join("")
          }`,
          ephemeral: true,
        });
      }
    }
  }
});

client.login(process.env.TOKEN);
