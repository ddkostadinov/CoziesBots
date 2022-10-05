const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

const ocean_blue_button = new ActionRowBuilder()
        .addComponents(new ButtonBuilder()
                .setCustomId('ocean_blue_button')
                .setLabel('Enter info')
                .setStyle(ButtonStyle.Primary),);


module.exports = ocean_blue_button;