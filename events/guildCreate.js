require('dotenv').config();
const { MessageEmbed } = require('discord.js');
const purpleColor = require('../data/element_types').ELECTRO.color;
const getServerImageInfo = require('../utils/server_info');

module.exports = async (client, guild) => {
  const guildJoinChannel = await client.channels.fetch(process.env.GUILD_CREATE_CHANNEL);
  const { guildIconUrl, guildBannerUrl } = getServerImageInfo(guild);

  const embed = new MessageEmbed()
      .setColor(purpleColor)
      .setTitle('Lisa hopped into a new server!')
      .setDescription(`**Name**: ${guild.name}\n**ID**: ${guild.id}`)
      .setThumbnail(guildIconUrl)
      .setImage(guildBannerUrl)
      .setFooter(new Date(guild.joinedTimestamp).toUTCString());

  guildJoinChannel.send(embed);
};
