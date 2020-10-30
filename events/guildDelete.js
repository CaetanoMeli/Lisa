require('dotenv').config();
const { MessageEmbed } = require('discord.js');
const purpleColor = require('../data/element_types').ELECTRO.color;
const getServerImageInfo = require('../utils/server_info');

module.exports = async (client, guild) => {
  const isBotKicked = guild.unavailable === undefined;
  const guildDeleteChannel = await client.channels.fetch(process.env.GUILD_DELETE_CHANNEL);

  if (isBotKicked) {
    const { guildIconUrl, guildBannerUrl } = getServerImageInfo(guild);

    const embed = new MessageEmbed()
        .setColor(purpleColor)
        .setTitle('Lisa was kicked from a server 😭')
        .setDescription(`**Name**: ${guild.name}\n**ID**: ${guild.id}`)
        .setThumbnail(guildIconUrl)
        .setImage(guildBannerUrl)
        .setTimestamp();

    guildDeleteChannel.send(embed);
  }
};
