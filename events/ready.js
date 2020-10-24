const { defaultPrefix, serverConfig } = require('../config.json');
const owners = process.env.OWNERS;
require('dotenv').config();

module.exports = (client) => {
  console.info(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    status: "online",
    game: {
      name: "l?help | discord.gg/aS7EnZG",
      type: "PLAYING"
    }
  })
}