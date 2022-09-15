const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

const pink_button = new ActionRowBuilder()
        .addComponents(new ButtonBuilder()
                .setCustomId('pink_button')
                .setLabel('Enter info')
                .setStyle(ButtonStyle.Primary),);


module.exports = pink_button;