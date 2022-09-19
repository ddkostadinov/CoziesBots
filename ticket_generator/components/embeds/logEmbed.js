const { EmbedBuilder, AttachmentBuilder } = require("discord.js")
const Discord = require("discord.js")

const colorbg = require("../../index")

const loggingEmbed = (member) => {
    const logEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	
	.setAuthor({ name: 'User created banner', iconURL: 'https://i.imgur.com/cgprakZ.png'}) //, url: 'https://discord.js.org' })
	
	.addFields(
		{ name: "Logging info", value: 'User logged: ' + '**' + member.user.username + '#' + member.user.discriminator + '**' + '\nName input: ' + '**' + colorbg.name_response + '**' + '\nTwitter input: ' + '**' + colorbg.twitter_response + '**' },
		 // { name: '\u200B', value: '\u200B' },
		
	)
	.setTimestamp()
    

    return logEmbed
}


	


module.exports = loggingEmbed;