const {
  ActionRowBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require("discord.js");

const modal = new ModalBuilder().setCustomId("myModal").setTitle("Information");

// Add components to modal

// Create the text input components
const emailInput = new TextInputBuilder()
  .setCustomId("emailInput")
  .setLabel("Enter your email")
  .setMinLength(1)
  .setPlaceholder("Email")
  .setMaxLength(50)
  .setStyle(TextInputStyle.Short)
  .setRequired(false);

const walletInput = new TextInputBuilder()
  .setCustomId("walletInput")
  .setLabel("Enter your 0x Address")
  .setMinLength(1)
  .setMaxLength(50)
  .setPlaceholder("0x Address")
  .setRequired(true)
  .setStyle(TextInputStyle.Short);

// An action row only holds one text input,
// so you need one action row per text input.
const firstActionRow = new ActionRowBuilder().addComponents(emailInput);
const secondActionRow = new ActionRowBuilder().addComponents(walletInput);

// Add inputs to the modal
modal.addComponents(firstActionRow, secondActionRow);

module.exports = modal;
