import {greeting} from './random/random_greeting.js';
import { createRequire } from 'module'

const require = createRequire(import.meta.url);

const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton, MessageComponentCollector } = require('discord.js');
const { Client, Intents } = require('discord.js');
const random_greetings = greeting[Math.floor(Math.random() * greeting.length)];
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const BotId = 'OTg4ODIwMDU4Mzg4MTk3NDA2.Gb0vIX.lzqj3De39vW-R-c-Xc38ZwKY3EAOnDc_bjFi8Q'
const MyTestChannel = process.env['Channel_test']
const AndrewChannel = process.env['channel_andrew']
const CozyChannel = '989450735542484992'

function random() {
  return greeting[Math.floor(Math.random() * greeting.length)]
}

const new_button = new MessageActionRow()
        .addComponents(new MessageButton()
                      .setCustomId('button')
					            .setLabel('Talk to Jeeves')
					            .setStyle('PRIMARY'),);

const row = new MessageActionRow()
			.addComponents(new MessageSelectMenu()
				.setCustomId('menu')
				.setPlaceholder('Ask a question')
				.setMinValues(1)
				.setMaxValues(1)
				.addOptions([
          {
						label: 'Who are you?',
						value: 'first_option',
          },
          {
            label: 'Where are we?',
            value: 'second_option',
          },
          {
            label: 'Are we waiting for some sort of train? When is it arriving?',
            value: 'third_option',
          },
          {
            label: 'How can I stay safe here?',
            value: 'fourth_option',
          },
          {
            label: 'Could you tell me the etiquette on board again?',
            value: 'fifth_option',
          },
                  ])
    );



client.on("messageCreate", async message => { 
        const cmd = message.content
        
        if(cmd == '!callvalet' && message.author.tag == 'djakozz#7269') {
         await client.channels.cache.get(CozyChannel).send({ content: 'You can speak with Jeeves when you click the button', components: [new_button]});
        }
});


client.on('interactionCreate', async click => {
    if(click.isSelectMenu()) {
      if(click.customId == 'menu') { 
          let value = click.values[0];
          if(value === 'first_option') {
          await click.reply({ content:"The name is G-VS 2.0, but you can call me Jeeves.\n\nMy purpose is to assist all passengers in any way possible and answer your questions. I'm literally incapable of lying or holding in relevant information, which is precisely why the Train Staff here is very careful with what they tell me... or making sure I don't overhear.\n\nI am at your service, Cozy. If you have any questions, do let me know.", ephemeral: true});
      }
          else if(value === 'second_option') {
          await click.reply({ content:"This is the Cozy Platform. You most likely heard rumours about this place in the City - well, it's a real thing. Cool place, right?\n\nIt's quite old, actually. Our Engineers rebuilt it after realizing that the City wasn't the place it had once been. They revived this place, a refuge for others who felt this way.\n\nWhy a platform? Our Engineers were always fascinated by trains. The sound of the engines, the views, the people you meet. It's an intermission, a breather for your mind.", ephemeral: true});
      }
          else if(value === 'third_option') {
          await click.reply({ content:"Trust me, I would've told you if I knew. The Staff intentionally avoid this topic so I don't spill the tea. That was the saying, right?\n\nDid you know, though, that this platform was actually built on top of an old and abandonned one? Rumours tell of the only train that ever passed through here. There, see the ballast right there? No rails. Weird right?\n\nApparently, the fabled CoZ-13 never had wheels. They call it the miracle of the Third Industrial Revolution. Urban legends, of course. Not even our Engineers are capable of developing the mechanism. You peeps tend to make stuff up. Wish I had that code too...", ephemeral: true});
      }
          else if(value === 'fourth_option') {
          await click.reply({ content:"Great question - DO NOT talk to people outside of the Platform.\n\nSecond - understand that the Train Staff will NEVER talk to you in private, except in the designated offices.\n\nThird - know that the ONLY true messages our staff or GM send out are through (@CoziesOfficial)", ephemeral: true});
      }
          else if(value === 'fifth_option') {
          await click.reply({ content: "Ettiquette requires you to be civil and respectful to your fellow passengers.\n\nOne must NOT yell (spam) or hang posters (self-promote & shill) on The Platform outside of designated areas.\n\nNo obscene or NSFW content is allowed on The Platform.\n\nAnd please, if you notice something unusual or uncomfortable on The Platform, inform us. The Train Staff is always happy to help.", ephemeral: true});
      }
        }
      
    }
      
    else if(click.isButton()) { await click.reply({ content: random(), components: [row], ephemeral: [true] });
    }
    
  
});


client.login(BotId)







  
  
         



