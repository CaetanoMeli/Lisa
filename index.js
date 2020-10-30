const { defaultPrefix, serverConfig } = require('./config.json');
const Discord = require('discord.js');
const EmbedBuilder = require("./utils/embed_builder");
require('dotenv').config();

const client = new Discord.Client({
  disableMentions: 'everyone',
  disabledEvents: ["TYPING_START"]
});

client.commands = new Discord.Collection();

const commands = require('./structures/command');
commands.run(client);

const events = require('./structures/event');
events.run(client);

process.on('unhandledRejection', async e => {
  console.error(e);
  const errorChannel = await client.channels.fetch(process.env.BOT_ERROR_CHANNEL);
  errorChannel.send(EmbedBuilder.buildErrorEmbed(e));
});

client.login(process.env.TOKEN);

const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('ok');
});
server.listen(3000);
