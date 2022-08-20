import os
import discord
import datetime
import asyncio
import time
import weather
import random



time_to_wait = datetime.datetime.now

intents = discord.Intents.default()
intents.message_content = True
my_secret = 'OTgzNzIyMjEzOTY4NjAxMTI5.GI1Pb1.I09t8_4Hs0JsBKlf_BfRZUWX-Koq-ijdrn8W8U'
client = discord.Client(intents=intents)

@client.event
async def on_ready():
  print("We have logged in as {0.user}".format(client))

@client.event
async def on_message(message):
  time.sleep(20)
  await message.channel.send(random.choice(weather.the_weather))
  time.sleep(20)
  

  
client.run(my_secret)
  

P = 5 
