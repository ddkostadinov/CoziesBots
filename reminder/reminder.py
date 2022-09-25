import os
import discord
import datetime
import asyncio
import time

import random
from discord.ext import tasks


time_to_wait = datetime.datetime.now

intents = discord.Intents.default()
intents.message_content = True

my_secret = 'MTAyMjk1NzY3MDA4MjI5Mzg1MQ.GYGHKl.0qPVInn4Ccs9CdrN2ik6LrvS8bRTPf14loENFo'
client = discord.Client(intents=intents)

copies = ["Welcome new passengers! Feel free to talk to <#989450735542484992> and get some <#1018833627108360242> !\n\nYou can also learn <#1022240251806236825> and learn more about leveling on <#1020710179236479036>\n\nEnjoy your stay on the Cozy Platform! <:cozy_love:1020988755336769557>", "GM <:cozy_candle:1021415114861195337> If you’re new here, you should say hi to <#989450735542484992> and learn <#1022240251806236825> <:cozies:1021414996405653554>\n\nYou can receive cool benefits by leveling - learn more on <#1020710179236479036>\n\nGlad to have you here! <:cozy_love:1020988755336769557>", "New to the Cozy Platform? Make sure to get some <#1018833627108360242> and learn <#1022240251806236825> ~ you can do quests/pursuits. \n\nMore on that on <#1020710179236479036>"]

@client.event
async def on_ready():
  print("We have logged in as {0.user}".format(client))
  myLoop.start()

@tasks.loop(minutes=40)
async def myLoop():
  channel = client.get_channel(989451180843352114) 
  await channel.send(random.choice(copies))
  
  
  

  
client.run(my_secret)