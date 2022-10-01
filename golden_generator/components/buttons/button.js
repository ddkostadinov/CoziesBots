const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");


const button = new ActionRowBuilder()
                .addComponents(new ButtonBuilder()
                        .setCustomId('main_button')
                        .setLabel('Create Card')
                        .setStyle(ButtonStyle.Primary),);

module.exports = button;