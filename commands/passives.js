const {MessageEmbed} = require('discord.js');
const addReactionsAndNavigate = require('../utils/reaction_navigation');
const { parseFindUnitArgs, findUnitByName } = require('../utils/find_unit');

module.exports = {
  name: 'passives',
  description: 'Displays a unit\'s passives',
  requirements: {},
  execute(client, msg, args) {
    const { unitName, pageNumber } = parseFindUnitArgs(args);
    const hero = findUnitByName(unitName);
    if (hero) {
      const currentPage = pageNumber;
      const maxPages = hero.passives.length;
      const embeds = hero.passives.map((passive, index) => buildPassiveEmbed(hero, passive, index, maxPages));

      return msg.channel.send(embeds[currentPage])
          .then(message => addReactionsAndNavigate(msg, message, embeds, currentPage, maxPages));
    }

    msg.reply('Unit doesnt exist! Use l?unit_list to check the list of all units');
  },
};

const buildPassiveEmbed = (hero, passive, index, total) => {
  return new MessageEmbed()
      .setColor(hero.element.color)
      .setAuthor(`[${hero.rarity}] ${hero.name}`, hero.thumbnail)
      .setTitle(`${passive.name}`)
      .setURL(hero.url)
      .setThumbnail(passive.thumbnail)
      .setDescription(`**${passive.ascension}**\n\n${passive.description}`)
      .setFooter(`Page ${index + 1}/${total}`, hero.element.img);
};
