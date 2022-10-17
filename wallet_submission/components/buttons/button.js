const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

const button = new ActionRowBuilder().addComponents(
  new ButtonBuilder()
    .setCustomId("main_button")
    .setLabel("Enter Information")
    .setStyle(ButtonStyle.Primary)
);

module.exports = button;
