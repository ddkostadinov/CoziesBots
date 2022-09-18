const Canvas = require("canvas")
const Discord = require("discord.js")
const colorbg = require("./index")

//const background = "https://i.imgur.com/cgprakZ.png"
let background = "bgto"

const applyText = (canvas, text) => {
	const context = canvas.getContext('2d');
	let fontSize = 70;

	do {
		context.font = `bold ${fontSize -= 10}pt Kollektif`;
	} while (context.measureText(text).width > canvas.width - 300);

    if (text.length >= 14) {
        context.font = `bold ${fontSize -= 10}pt Kollektif`;
    }
	return context.font;
};

const dim = {
    height: 500,
    width: 1500,
    margin: 50
}

const av = {
    size: 256,
    x: 725,
    y: 125
}

const generateImage = async (member) => {
    
    let username = member.user.username
    let discrim = member.user.discriminator
    let name = colorbg.name_response
    let twitter = colorbg.twitter_response
    const nametoUpper = name.toUpperCase()

    console.log(member.user.displayAvatarURL())
    let avatarURL = member.user.displayAvatarURL({extension: "png", dynamic: false, size: av.size})
    console.log(avatarURL)

    const canvas = Canvas.createCanvas(dim.width, dim.height)
    const ctx = canvas.getContext("2d")

    //draw in the background
    const backimg = await Canvas.loadImage(colorbg.bg)
    ctx.drawImage(backimg, 0, 0)

    //draw black tinted box
    //ctx.fillStyle = "rgba(0,0,0,0.8)"
    //ctx.fillRect(dim.margin, dim.margin, dim.width - 2 * dim.margin, dim.height - 2 * dim.margin)

    const avimg = await Canvas.loadImage(avatarURL)
    ctx.save()
    
    ctx.beginPath()
    ctx.arc(av.x / 3 + av.size / 2 , av.y + av.size / 2, av.size / 2, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.clip()

    ctx.drawImage(avimg, av.x / 3, av.y)
    ctx.restore()

    // write in text
    ctx.fillStyle = "white"
    ctx.textAlign = "center"

    // draw in Welcome
    //ctx.font = "50 px Roboto"
    //ctx.fillText("Welcome", dim.width/2, dim.margin + 70)

    // draw in the username
    
    ctx.font = applyText(canvas, nametoUpper)
    ctx.fillText(nametoUpper, dim.width - 540, dim.height - dim.margin - 213 )

    ctx.fillStyle = "#60AAD9"
    ctx.textAlign = "center"

    ctx.font = "bold 2pt Kollektif"
    ctx.fillText(twitter, dim.width - 522.5, dim.height - dim.margin - 134 )


    // draw in to the server
    ctx.fillStyle = "#60AAD9"
    ctx.textAlign = "center"
    ctx.font = "bold 24pt Kollektif"
    ctx.fillText(username + "#" + discrim, dim.width - 522.5, dim.height - dim.margin - 67)

    const attachment = new Discord.AttachmentBuilder(canvas.toBuffer(), "welcome.png")
    return attachment

}

module.exports = generateImage