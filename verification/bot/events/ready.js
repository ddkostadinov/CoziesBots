module.exports = async (client) => {
  client.logger.info(
    `Cozies has booted up and is running on ${client.guilds.cache.size} server(s)`
  );
};
