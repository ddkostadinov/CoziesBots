const { EmbedBuilder, AttachmentBuilder } = require("discord.js")
const blueBackground = new AttachmentBuilder('../assets/blue.png');

const instructionEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('INSTRUCTION MANUAL')
	.setURL('https://cozies.io')
	.setAuthor({ name: 'COZ-135 ID CARD GENERATOR', iconURL: 'https://i.imgur.com/cgprakZ.png', url: 'https://cozies.io' })
	.setDescription('Follow the steps below to create your very own Cozy ID Card')
	.setThumbnail('https://i.imgur.com/cgprakZ.png')
	.addFields(
		{ name: 'BACKGROUND', value: 'Choose your background' },
		 // { name: '\u200B', value: '\u200B' },
		{ name: 'NAME', value: 'Enter your name'},
		{ name: 'TWITTER', value: 'Enter your twitter handle'}
	)
	
	
	// .setTimestamp()
	


module.exports = instructionEmbed;