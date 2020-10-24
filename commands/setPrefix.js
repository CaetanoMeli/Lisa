const config = require('../config.json');

module.exports = {
  name: 'set_prefix',
  description: 'Sets bot prefix!',
  requirements: {},
  execute(bot, msg, args) {
    const guildID = msg.guild.id;
    const newPrefix = args;

    if (!config.serverConfig[guildID]) {
      config.serverConfig[guildID] = {};
    }

    config.serverConfig[guildID].prefix = newPrefix;

    msg.reply(`New prefix was set to: ${newPrefix}`);
  },
};
