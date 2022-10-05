const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

const sky_blue_button = new ActionRowBuilder()
        .addComponents(new ButtonBuilder()
                .setCustomId('sky_blue_button')
                .setLabel('Enter info')
                .setStyle(ButtonStyle.Primary),);


module.exports = sky_blue_button;