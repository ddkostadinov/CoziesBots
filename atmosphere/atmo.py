import os
import discord
import datetime
import asyncio
import time
import weather
import random
from discord.ext import tasks


time_to_wait = datetime.datetime.now

intents = discord.Intents.default()
intents.message_content = True
my_secret = 'OTgzNzIyMjEzOTY4NjAxMTI5.GI1Pb1.I09t8_4Hs0JsBKlf_BfRZUWX-Koq-ijdrn8W8U'
client = discord.Client(intents=intents)

@client.event
async def on_ready():
  print("We have logged in as {0.user}".format(client))
  myLoop.start()

@tasks.loop(seconds=20)
async def myLoop():
  channel = client.get_channel(989451180843352114)
  await channel.send(random.choice(weather.the_weather))
  
  

  
client.run(my_secret)
  


