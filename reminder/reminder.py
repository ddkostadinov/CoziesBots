import os
from re import T
import discord
import datetime
import time
import random
from discord.ext import tasks

intents = discord.Intents.default()
intents.message_content = True

my_secret = 'MTAyMjk1NzY3MDA4MjI5Mzg1MQ.GYGHKl.0qPVInn4Ccs9CdrN2ik6LrvS8bRTPf14loENFo' #change after test
client = discord.Client(intents=intents)



time_now = datetime.datetime.now
t = datetime.time

copies = ["The Diamond Ticket. Trade, reveal or keep it - it's your choice. More about the mint method here: <#1026854780934565958> / Learn how to get whitelisted <#1032246877367840818>"]

diamond_copies = ["<@&1031593747353436170> remember to give your Metamask Ethereum address to <#1031596602940456960>\n\nIf you’d like to level up to get more 💎, do check out <#1032239667346690159>"]


dts = [t(1), t(3), t(5), t(7), t(9), t(11), t(13), t(15), t(17), t(19), t(21), t(23)]
diamond_dts = [t(2), t(4), t(6), t(8), t(10), t(12), t(14), t(16), t(18), t(20), t(22)]

@client.event
async def on_ready():
  print("We have logged in as {0.user}".format(client))
  myLoop.start()
  myDiamondLoop.start()
  
@tasks.loop(time = dts)
async def myLoop():
  channel = client.get_channel(989451180843352114)  # change after test
  await channel.send(random.choice(copies), file=discord.File('./theDiamondTicket.mov'))
  time.sleep(2)
  
@tasks.loop(time = diamond_dts)
async def myDiamondLoop():
  channel = client.get_channel(1034170366911840346)  # change after test
  await channel.send(diamond_copies)
  time.sleep(2)
  
  
  
  
  
  
  

  
client.run(my_secret)