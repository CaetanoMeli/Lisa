const {MessageEmbed} = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Shows available commands!',
  requirements: {},
  execute(client, msg, args) {
    if (args[0] && client.commands.has(args[0])) {
      const cmd = client.commands.get(args[0]);
      
      const embed = new MessageEmbed()
        .setAuthor(`${cmd.name} | Help`, client.user.displayAvatarURL())
        .setDescription(`**Name:** ${cmd.name}\n**Description:** ${cmd.description}`);

        return msg.channel.send(embed);
    }
    const embed = new MessageEmbed()
      .setAuthor(`Help | ${client.user.username}`, client.user.displayAvatarURL())
      .setDescription(client.commands.map(cmd => `- ${cmd.name}`).join("\n"))

    msg.channel.send(embed);
  },
};