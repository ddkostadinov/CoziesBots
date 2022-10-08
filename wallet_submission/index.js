const { Client, GatewayIntentBits } = require('discord.js');
const Discord = require("discord.js")

const mongoose = require("mongoose")
require("dotenv").config()

const components = require("./components/components")

const Wallet = components.walletSchema
const cardChannel = "1027627179770654820"
const loggingChannel = "1021454453083226112"

const questRole = ['1011659799060029470','1021810823062114374','1025040571334660196','1021810356215087235','1020639411819520023','1020639942793252934','1021767511458455572','1021767511458455572','1026042737465761843', 'No role'] // golden

const client = new Discord.Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});



client.on("ready", async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        keepAlive: true,
    }).then((m) => {
        console.log("Connected to DB");
    }).catch((err) => console.log(err));


    console.log(`Logged in as ${client.user.tag}`)
})



client.on("messageCreate", async message => {
    const cmd = message.content;
    if(cmd == '!callwallet' && message.author.tag == 'djakozz#7269') {
        await client.channels.cache.get(cardChannel).send({ contents: "Enter your email and shipping address", components: [components.button]});
    }
})


client.on('interactionCreate', async click => {
    
    
      
    if(click.isButton()) {
        if(click.customId == 'main_button') { 
            const passenger = click.member.roles.cache
            for (let i = 0; i < questRole.length; i++) {

              if(passenger.has(questRole[i])) {
                await click.showModal(components.modal);
                return
              }

              else if (questRole[i] == 'No role') {
                await click.reply({ content: '***Only a Ticket Holders can interact with the machine***', ephemeral: [true] });
              }
            }
            
            
        }
  
        
    }

    if (click.customId === "myModal") {
        
        const email_response = click.fields.getTextInputValue("emailInput");
        const wallet_response = click.fields.getTextInputValue("walletInput");
        
        let member = click.guild.members.cache.get(click.user.id);
        let username = member.user.username
        let discrim = member.user.discriminator
        let tag = username + '#' + discrim
        //exports.email_response = email_response
        //exports.wallet_response = wallet_response

        const newWallet = await Wallet.create({
            discordId: click.user.id,
            discordTag: tag,
            email: email_response,
            wallet: wallet_response,
            
        })

        // message accepted
        
        click.reply({
        content: `*Your information has been saved. Thank you Cozy!*`, ephemeral: true
        })

        

    }
});



client.login(process.env.TOKEN)