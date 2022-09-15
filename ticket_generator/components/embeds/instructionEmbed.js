const { EmbedBuilder, AttachmentBuilder } = require("discord.js")
const blueBackground = new AttachmentBuilder('../assets/blue.png');

const instructionEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('INSTRUCTION MANUAL')
	
	.setAuthor({ name: 'COZY CARD CREATOR', iconURL: 'https://i.imgur.com/cgprakZ.png'}) //, url: 'https://discord.js.org' })
	.setDescription('How to create your very own Cozy Card')
	.setThumbnail('https://i.imgur.com/cgprakZ.png')
	.addFields(
		{ name: 'BACKGROUND', value: 'Choose your background: yellow, blue or red' },
		 // { name: '\u200B', value: '\u200B' },
		{ name: 'NAME', value: 'Enter your name'},
		{ name: 'TWITTER OR DISCORD', value: 'Enter your twitter handle or discord tag'},
	)
	
	.setImage('https://i.imgur.com/cgprakZ.png')
	// .setTimestamp()
	.setFooter({ text: 'example card', iconURL: 'https://i.imgur.com/cgprakZ.png' });


module.exports = instructionEmbed;