const {MessageEmbed} = require('discord.js');
const addReactionsAndNavigate = require('../utils/reaction_navigation');
const { parseFindUnitArgs, findUnitByName } = require('../utils/find_unit');

const navigationTime = 30000; // 30 seconds

module.exports = {
  name: 'constellations',
  description: 'Displays a unit\'s constellations',
  requirements: {},
  execute(client, msg, args) {
    const { unitName, pageNumber } = parseFindUnitArgs(args);
    const hero = findUnitByName(unitName);
    if (hero) {
      const currentPage = pageNumber;
      const maxPages = hero.constellations.length;
      const embeds = hero.constellations.map((constellation, index) => buildConstellationEmbed(hero, constellation, index, maxPages));

      return msg.channel.send(embeds[currentPage])
          .then(message => addReactionsAndNavigate(msg, message, embeds, currentPage, maxPages, navigationTime));
    }

    msg.reply('Unit doesnt exist! Use l?unit_list to check the list of all units');
  },
};

const buildConstellationEmbed = (hero, constellation, index, total) => {
  return new MessageEmbed()
      .setColor(hero.element.color)
      .setAuthor(`[${hero.rarity}] ${hero.name}`, hero.thumbnail)
      .setTitle(`${constellation.name}`)
      .setURL(hero.url)
      .setThumbnail(constellation.thumbnail)
      .setDescription(`**${constellation.level}**\n\n${constellation.description}`)
      .setFooter(`Page ${index + 1}/${total}`, hero.element.img);
};
