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
  .setLabel("Enter your Shipping Address")
  .setMinLength(1)
  .setMaxLength(1000)
  .setPlaceholder("Shipping Address")

  .setRequired(true)
  .setStyle(TextInputStyle.Short);

const phoneInput = new TextInputBuilder()
  .setCustomId("phoneInput")
  .setLabel("Enter your Phone number")
  .setMinLength(1)
  .setMaxLength(1000)
  .setPlaceholder("Phone number")

  .setRequired(true)
  .setStyle(TextInputStyle.Short);

const nameInput = new TextInputBuilder()
  .setCustomId("nameInput")
  .setLabel("Enter your Name")
  .setMinLength(1)
  .setMaxLength(1000)
  .setPlaceholder("Name")

  .setRequired(true)
  .setStyle(TextInputStyle.Short);

// An action row only holds one text input,
// so you need one action row per text input.
const firstActionRow = new ActionRowBuilder().addComponents(nameInput);
const secondActionRow = new ActionRowBuilder().addComponents(phoneInput);
const thirdActionRow = new ActionRowBuilder().addComponents(emailInput);
const fourthActionRow = new ActionRowBuilder().addComponents(walletInput);

// Add inputs to the modal
modal.addComponents(
  firstActionRow,
  secondActionRow,
  thirdActionRow,
  fourthActionRow
);

module.exports = modal;
