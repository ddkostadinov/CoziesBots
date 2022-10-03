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

copies = ["Welcome new passengers! Feel free to talk to <#989450735542484992> and get some <#1018833627108360242> !\n\nYou can also learn <#1022240251806236825> and learn more about leveling on <#1020710179236479036>\n\nEnjoy your stay on the Cozy Platform! <:cozy_love:1020988755336769557>", "GM <:cozy_candle:1021415114861195337> If you’re new here, you should say hi to <#989450735542484992> and learn <#1022240251806236825> <:cozies:1021414996405653554>\n\nYou can receive cool benefits by leveling - learn more on <#1020710179236479036>\n\nGlad to have you here! <:cozy_love:1020988755336769557>", "New to the Cozy Platform? Make sure to get some <#1018833627108360242> and learn <#1022240251806236825> ~ you can do quests/pursuits. \n\nMore on that on <#1020710179236479036>"]

verify = "Don't forget to submit your wallet to verify your Allowlist here: https://www.superful.xyz/project/cozies-official/wallet_submission/cozies-allowlist-ticket-verification  <:cozies:1026527557065134140>\n\nFor more info, check out the <#989451112593629184>"

golden = "We present - The Golden Ticket. Learn more about this legendary ticket at <#1024634617447337984>"

@client.event
async def on_ready():
  print("We have logged in as {0.user}".format(client))
  myLoop.start()
  myGoldenLoop.start()

@tasks.loop()
async def myLoop():
  if time_now().minute == 30 and time_now().second == 1:
      channel = client.get_channel(989451180843352114)  # change after test
      await channel.send(random.choice(copies) + "\n\n" + verify)
      time.sleep(2)
  

@tasks.loop()
async def myGoldenLoop():
  if time_now().minute == 0 and time_now().second == 1:
      channel = client.get_channel(989451180843352114)  # change after test
      await channel.send(golden, file=discord.File('./goldenTicket.mov'))
      time.sleep(2)
  
  
  
  

  
client.run(my_secret)