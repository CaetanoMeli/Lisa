const { defaultPrefix, serverConfig } = require('../config.json');
const owners = process.env.OWNERS;
require('dotenv').config();

module.exports = (client) => {
  console.info(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('l?help | discord.gg/aS7EnZG', {
    url: "https://discord.gg/aS7EnZG",
    status: "online",
    type: "PLAYING"
  })
}