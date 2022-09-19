const { ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

const row = new ActionRowBuilder()
.addComponents(
    new SelectMenuBuilder()
        .setCustomId('selectbg')
        .setPlaceholder('No color selected yet')
        .addOptions(
            {
                label: 'Sky blue',
                
                value: 'first_option',
            },
            {
                label: 'Yellow',
                
                value: 'second_option',
            },
            {
                label: 'Pink',
                
                value: 'third_option',
            },
            {
                label: 'Purple',
                
                value: 'fourth_option',
            },
            {
                label: 'Ocean blue',
                
                value: 'fifth_option',
            }
        ),
);

module.exports = row;