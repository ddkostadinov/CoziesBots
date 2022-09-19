const { Client, GatewayIntentBits } = require('discord.js');
const Discord = require("discord.js")
const generateImage = require("./generateImage")

require("dotenv").config()

const components = require("./components/components")

const welcomeChannelId = "1019986713545809940"

const client = new Discord.Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

let bg = "lolxd";

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})



client.on("messageCreate", async message => {
    const cmd = message.content;
    if(cmd == '!callgenerator' && message.author.tag == 'djakozz#7269') {
        await client.channels.cache.get(welcomeChannelId).send({ embeds: [components.instructionEmbed], components: [components.button]});
    }
})


client.on('interactionCreate', async click => {
    
    if(click.isSelectMenu()) {

        //chosen background
      if(click.customId == 'selectbg') { 
          let value = click.values[0];

          if(value === 'first_option') {
          await click.reply({ embeds: [components.blueEmbed], components: [components.sky_blue_button], ephemeral: true});
          
          
      }
          else if(value === 'second_option') {
          await click.reply({ embeds: [components.yellowEmbed], components: [components.yellow_button], ephemeral: true});
          
      }
          else if(value === 'third_option') {
          await click.reply({ embeds: [components.pinkEmbed], components: [components.pink_button], ephemeral: true});
          
      }
            else if(value === 'fourth_option') {
            await click.reply({ embeds: [components.purpleEmbed], components: [components.purple_button], ephemeral: true});
        
      }
            else if(value === 'fifth_option') {
            await click.reply({ embeds: [components.oceanBlueEmbed], components: [components.ocean_blue_button], ephemeral: true});
            
      }
  
        }
      
    }
      
    if(click.isButton()) {
        if(click.customId == 'main_button') { 
            let member = click.guild.members.cache.get(click.user.id);
            
            // await client.channels.cache.get(welcomeChannelId).send(member);
            await click.reply({content: "Please select a background color", components: [components.row], ephemeral: true})
        }
  
        // different background options
        else if(click.customId == 'yellow_button') { 
            await click.showModal(components.modal);
            bg = "https://i.imgur.com/JqZBf6n.png";
            exports.bg = bg;
          }
        
        else if(click.customId == 'sky_blue_button') { 
            await click.showModal(components.modal);
            bg = "https://i.imgur.com/h7xSHE4.png";
            exports.bg = bg;
          }
        
        else if(click.customId == 'pink_button') { 
            await click.showModal(components.modal);
            bg = "https://i.imgur.com/El5TgmJ.png";
            exports.bg = bg;
          }
        
        else if(click.customId == 'purple_button') { 
            await click.showModal(components.modal);
            bg = "https://i.imgur.com/FJKBO3k.png";
            exports.bg = bg;
          }
        
        else if(click.customId == 'ocean_blue_button') { 
            await click.showModal(components.modal);
            bg = "https://i.imgur.com/7pLz7fp.png";
            exports.bg = bg;
          }
    }

    if (click.customId === "myModal") {
        
        const name_response = click.fields.getTextInputValue("nameInput");
        const twitter_response = click.fields.getTextInputValue("twitterInput");
        let member = click.guild.members.cache.get(click.user.id);

        exports.name_response = name_response
        exports.twitter_response = twitter_response

        // logging info of user
        const logged = components.loggingEmbed(member)
        client.channels.cache.get(welcomeChannelId).send({ embeds: [logged] })

        // generating banner
        const img = await generateImage(member);
        click.reply({
        content: `*The ticket machine makes a few beep-boop sounds and produces your ticket.*`, ephemeral: true, files: [img]
        })

        

    }
});



client.login(process.env.TOKEN)



