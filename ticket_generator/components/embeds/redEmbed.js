const { EmbedBuilder } = require("discord.js")


const redEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('BACKGROUND')

    .setAuthor({ name: 'COZY CARD CREATOR', iconURL: 'https://i.imgur.com/cgprakZ.png'}) //, url: 'https://discord.js.org' })
    .setDescription('SET TO RED')
    .setThumbnail('https://i.imgur.com/2h4140k.jpg')
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


module.exports = redEmbed;