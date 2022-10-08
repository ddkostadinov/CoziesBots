const Discord = require("discord.js")

const button = require("./buttons/button");

const modal = require('./modal/modal');
const instructionEmbed = require('./embeds/instructionEmbed');
const walletSchema = require('./schema/walletSchema')



module.exports = {button, modal, instructionEmbed, walletSchema}