import os
import discord
import datetime
import asyncio
import time

import random
from discord.ext import tasks


time_now = datetime.datetime.now

intents = discord.Intents.default()
intents.message_content = True

my_secret = 'MTAyMjk1NzY3MDA4MjI5Mzg1MQ.GYGHKl.0qPVInn4Ccs9CdrN2ik6LrvS8bRTPf14loENFo' #change after test
client = discord.Client(intents=intents)

copies = ["The Diamond Ticket. Trade, reveal or keep it - it's your choice. More about the mint method here: <#1026854780934565958> / Learn how to get whitelisted <#1032246877367840818>"]



@client.event
async def on_ready():
  print("We have logged in as {0.user}".format(client))
  myLoop.start()
  

@tasks.loop()
async def myLoop():
  if time_now().minute == 0 and time_now().second == 1:
      channel = client.get_channel(989451180843352114)  # change after test
      await channel.send(random.choice(copies), file=discord.File('./theDiamondTicket.mov'))
      
      time.sleep(2)
  
golden = 'PLACEHOLDER'
@tasks.loop()
async def myGoldenLoop():
  if time_now().minute == 0 and time_now().second == 1:
      channel = client.get_channel(989451180843352114)  # change after test
      await channel.send(golden, file=discord.File('./goldenTicket.mov'))
      time.sleep(2)
  
  
  
  

  
client.run(my_secret)