const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

const yellow_button = new ActionRowBuilder()
.addComponents(new ButtonBuilder()
        .setCustomId('yellow_button')
        .setLabel('Enter info')
        .setStyle(ButtonStyle.Primary),);

module.exports = yellow_button;