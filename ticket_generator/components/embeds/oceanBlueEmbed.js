const { EmbedBuilder } = require("discord.js")


const oceanBlueEmbed = new EmbedBuilder()
		.setColor(0x0099FF)

		.setAuthor({ name: 'COZ-135 ID CARD GENERATOR', iconURL: 'https://i.imgur.com/cgprakZ.png', url: 'https://cozies.io' })
		.setDescription('Background set to: **OCEAN BLUE**')
    /*
	.addFields(
		{ name: 'BACKGROUND', value: 'Choose your background: yellow, blue or red' },
		 // { name: '\u200B', value: '\u200B' },
		{ name: 'NAME', value: 'Enter your name'},
		{ name: 'TWITTER OR DISCORD', value: 'Enter your twitter handle or discord tag'},
	)
	*/
	//.setImage('https://i.imgur.com/cgprakZ.png')
	// .setTimestamp()
	//.setFooter({ text: 'example card', iconURL: 'https://i.imgur.com/cgprakZ.png' });


module.exports = oceanBlueEmbed;