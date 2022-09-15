const { ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

const row = new ActionRowBuilder()
.addComponents(
    new SelectMenuBuilder()
        .setCustomId('selectbg')
        .setPlaceholder('Nothing selected')
        .addOptions(
            {
                label: 'SKY BLUE BACKGROUND',
                
                value: 'first_option',
            },
            {
                label: 'YELLOW BACKGROUND',
                
                value: 'second_option',
            },
            {
                label: 'PINK BACKGROUND',
                
                value: 'third_option',
            },
            {
                label: 'PURPLE BACKGROUND',
                
                value: 'fourth_option',
            },
            {
                label: 'OCEAN BLUE BACKGROUND',
                
                value: 'fifth_option',
            }
        ),
);

module.exports = row;