const {
  MessageEmbed,
  MessageButton,
  MessageActionRow,
  MessageSelectMenu,
} = require("discord.js");
const { stripIndents } = require("common-tags");
module.exports = async (client, message) => {
  if (
    message.content == "!verify" && 
    message.author.id == "268777013622341632" //This is the ID of the bot: MTAxNDA5NjA1ODgzOTc0MDQ2Nw.Gtc-7j.FBTUbyfKj6KFhevkG73QqjRyffuX2F5iicQWr8 (add it to config.json)
  ) {
    let embed = new MessageEmbed()
      .setDescription(
        stripIndents`You arrive in a long-forgotten industrial area. Most of the surroundings are covered in creepers, climbers, and a fresh variety of emerald-green wildlife.

        Amidst the bushes, you hear bleeping sounds. They are coming from a peculiar-looking monitor with a smiling face on it. Upon detecting your presence, the monitor turns into a field, requiring you to enter some sort of password. The coordinates for this place were on this piece of paper you were given in the city… 
        
        Wasn’t there something written on the back of it?`
      )
      .setColor(`0xf99f38`);

    var row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("verify")
        .setLabel("🚇 ENTER 🚇")
        .setStyle("SUCCESS")
        .setDisabled(false),
      new MessageButton()
        .setCustomId("speed1")
        .setLabel("🚅💨💨💨💨")
        .setStyle("SECONDARY")
        .setDisabled(true),
      new MessageButton()
        .setCustomId("speed2")
        .setLabel("💨💨💨💨💨")
        .setStyle("SECONDARY")
        .setDisabled(true),
      new MessageButton()
        .setCustomId("speed3")
        .setLabel("💨💨💨💨💨")
        .setStyle("SECONDARY")
        .setDisabled(true)
    );
    message.channel.send({
      components: [row],
      embeds: [embed],
      files: ['./banner.jpg']
    });
  }
};
