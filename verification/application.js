const config = require("./configuration.json");
const Client = require("./bot/Client.js");
const { Intents } = require("discord.js");

global.__basedir = __dirname;

// Client setup
const intents = new Intents();
intents.add(
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MEMBERS,
  Intents.FLAGS.GUILD_MESSAGES,
);
const client = new Client(config, { intents: intents });

// Initialize client
function init() {
  client.loadEvents("./bot/events");
  client.login(config.bot.token);
}
init();

process.on("unhandledRejection", (err) => client.logger.error(err));

module.exports = {
  client,
};
