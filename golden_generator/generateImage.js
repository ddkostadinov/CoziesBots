const Canvas = require("canvas")
const Discord = require("discord.js")
const colorbg = require("./index")

//const background = "https://i.imgur.com/cgprakZ.png"
let background = "bgto"

const applyText = (canvas, text) => {
	const context = canvas.getContext('2d');
	let fontSize = 36;

	do {
		context.font = `bold ${fontSize -= 5}pt Futura MdCn BT`;
	} while (context.measureText(text).width > canvas.width - 300);

    if (text.length >= 20) {
        context.font = `bold ${fontSize -= 3}pt Futura MdCn BT`;
    }
	return context.font;
};

const dim = {
    height: 1125,
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
 
    const nametoUpper = name.toUpperCase()

    //let avatarURL = member.user.displayAvatarURL({extension: "png", dynamic: false, size: av.size})

    const canvas = Canvas.createCanvas(dim.width, dim.height)
    const ctx = canvas.getContext("2d")

    //draw in the background
    const backimg = await Canvas.loadImage(colorbg.bg)
    ctx.drawImage(backimg, 0, 0)

    // write in text
    ctx.imageSmoothingQuality = 1
    ctx.shadowOffsetY = 3
    ctx.shadowColor = "#9E7B29"
    ctx.fillStyle = "#FFFAD0"
    ctx.textAlign = "center"
    

    // draw in the username
    
    ctx.font = applyText(canvas, nametoUpper)
    ctx.fillText(nametoUpper, dim.width - 1160, dim.height - dim.margin - 302 )


    const attachment = new Discord.AttachmentBuilder(canvas.toBuffer(), "welcome.png")
    return attachment

}

module.exports = generateImage