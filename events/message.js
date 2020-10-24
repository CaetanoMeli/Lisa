const { defaultPrefix, serverConfig } = require('../config.json');
const owners = process.env.OWNERS;
require('dotenv').config();

module.exports = (client, msg) => {
  if (msg.author.bot) return;

  const serverCfg = serverConfig[msg.guild.id];

  const prefix = (serverCfg && serverCfg.prefix) || defaultPrefix;

  const args = msg.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (!msg.content.includes(prefix) || !client.commands.has(command)) {
    return;
  }

  const cmd = client.commands.get(command)

  if (!msg.guild.me.permissions.has(["SEND_MESSAGES"])) return;

  if (cmd.requirements.ownerOnly && !owners.includes(msg.author.id))
    return msg.reply("Only the bot owner can use this command!");

  if (cmd.requirements.clientPerms && !msg.guild.me.permissions.has(cmd.requirements.clientPerms))
    return msg.reply(`I am missing the following permissions: ${missingPerms(msg.guild.me, cmd.requirements.clientPerms)}`)

  try {
    cmd.execute(client, msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
}

const missingPerms = (member, perms) => {
  const missingPerms = member.permissions.missing(perms)
    .map(str => `\`${str.replace(/_/g, ' ').toLowerCase().replace(/\b(\w)/g, char => char.toUpperCase())}\``);

  return missingPerms.length > 1 ?
    `${missingPerms.slice(0, -1).join(", ")} and ${missingPerms.slice(-1)[0]}` : missingPerms[0];
}