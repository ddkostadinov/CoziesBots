const Canvas = require("canvas")
const Discord = require("discord.js")
const colorbg = require("./index")

//const background = "https://i.imgur.com/cgprakZ.png"
let background = "bgto"
/*
const checkBG = async () => {
    console.log('agada')
    console.log(colorbg.bg)
    if (colorbg.bg == "sky_blue") {
        background = "https://i.imgur.com/jf23qVl.png"
        console.log('sky_blue')
        return background
    }
    else if (colorbg.bg == "pink") {
        background = "https://i.imgur.com/r0cvOzs.png"
        console.log('pink')
        return background
    }
    else if (colorbg.bg == "yellow") {
        background = "https://i.imgur.com/hHxVaXc.png"
        console.log('yellow')
        return background
    }
    else if (colorbg.bg == "purple") {
        background = "https://i.imgur.com/7GNnsRR.png"
        console.log('purple')
        return background
    }
    else if (colorbg.bg == "ocean_blue") {
        background = "https://i.imgur.com/VRUY7xr.png"
        console.log('ocean_blue')
        return background
    }
}
*/
const dim = {
    height: 500,
    width: 1500,
    margin: 50
}

const av = {
    size: 256,
    x: 750,
    y: 125
}

const generateImage = async (member) => {
    //let background = await checkBG()
    console.log(background)
    let username = colorbg.name_response
    let discrim = colorbg.twitter_response
    const usernametoUpper = username.toUpperCase()

    console.log(member.user.displayAvatarURL())
    //let avatarURL = member.user.displayAvatarURL({format: "png", dynamic: false, size: av.size})
    
    const canvas = Canvas.createCanvas(dim.width, dim.height)
    const ctx = canvas.getContext("2d")

    //draw in the background
    const backimg = await Canvas.loadImage(colorbg.bg)
    ctx.drawImage(backimg, 0, 0)

    //draw black tinted box
    //ctx.fillStyle = "rgba(0,0,0,0.8)"
    //ctx.fillRect(dim.margin, dim.margin, dim.width - 2 * dim.margin, dim.height - 2 * dim.margin)
/*
    const avimg = await Canvas.loadImage(avatarURL)
    ctx.save()
    
    ctx.beginPath()
    ctx.arc(av.x + av.size / 2, av.y +av.size / 2, av.size / 2, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.clip()

    ctx.drawImage(avimg, av.x, av.y)
    ctx.restore()
*/
    // write in text
    ctx.fillStyle = "white"
    ctx.textAlign = "center"

    // draw in Welcome
    //ctx.font = "50 px Roboto"
    //ctx.fillText("Welcome", dim.width/2, dim.margin + 70)

    // draw in the username
    ctx.font = "bold 45pt Kollektif"
    ctx.fillText(usernametoUpper, dim.width/2, dim.height - dim.margin - 300 )

    ctx.fillStyle = "#60AAD9"
    ctx.textAlign = "center"

    ctx.font = "bold 28pt Kollektif"
    ctx.fillText(discrim, dim.width/2, dim.height - dim.margin - 88 )


    // draw in to the server
    //ctx.font = "40px Roboto"
    //ctx.fillText("to the server", dim.width / 2, dim.height - dim.margin - 50)

    const attachment = new Discord.AttachmentBuilder(canvas.toBuffer(), "welcome.png")
    return attachment

}

module.exports = generateImage