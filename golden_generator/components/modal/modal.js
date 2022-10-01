const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

const modal = new ModalBuilder()
			.setCustomId('myModal')
			.setTitle('Information');

// Add components to modal

// Create the text input components
const nameInput = new TextInputBuilder()
    .setCustomId('nameInput')
    .setLabel("Enter your name")
    .setMinLength(1)
    .setPlaceholder("Name")
    .setMaxLength(50)
    .setStyle(TextInputStyle.Short)
    .setRequired(false);



// An action row only holds one text input,
// so you need one action row per text input.
const firstActionRow = new ActionRowBuilder().addComponents(nameInput);


// Add inputs to the modal
modal.addComponents(firstActionRow);

module.exports = modal;