const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

const purple_button = new ActionRowBuilder()
        .addComponents(new ButtonBuilder()
                .setCustomId('purple_button')
                .setLabel('Enter info')
                .setStyle(ButtonStyle.Primary),);


module.exports = purple_button;