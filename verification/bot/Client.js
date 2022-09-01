const Discord = require("discord.js");
const { readdir, readdirSync } = require("fs");
const { join, resolve } = require("path");
const config = require("../configuration.json");
const colors = require("./assets/colors.json");

class Client extends Discord.Client {
  constructor(config, options = {}) {
    super(options);

    this.logger = require("./../functions/logging");

    this.token = config.token;

    this.ownerId = config.guild.ownerIDs;
  }

  loadEvents(path) {
    readdir(path, (err, files) => {
      if (err) this.logger.error(err);
      files = files.filter((f) => f.split(".").pop() === "js");
      if (files.length === 0)
        return this.logger.warn("Unfortunately, there were no events found");
      this.logger.info(`${files.length} event(s) found for Cozies...`);
      files.forEach((f) => {
        const eventName = f.substring(0, f.indexOf("."));
        const event = require(resolve(__basedir, join(path, f)));
        super.on(eventName, event.bind(null, this));
        delete require.cache[
          require.resolve(resolve(__basedir, join(path, f)))
        ];
        this.logger.info(`Loading events for Cozies: "${eventName}"`);
      });
    });
    return this;
  }

  isOwner(user) {
    if (this.ownerId.includes(user.id)) return true;
    else return false;
  }
}

module.exports = Client;
