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
my_secret = '[insert secret]'
client = discord.Client(intents=intents)

@client.event
async def on_ready():
  print("We have logged in as {0.user}".format(client))
  myLoop.start()

@tasks.loop(hours=5)
async def myLoop():
  channel = client.get_channel('[channel-id]')
  await channel.send(random.choice(weather.the_weather))
  
  

  
client.run(my_secret)
  


