const {MessageEmbed} = require('discord.js');
const units = require('../data/units');
const ElementType = require('../data/element_types');
const chunkSplit = require('../utils/chunks_split');
const addReactionsAndNavigate = require('../utils/reaction_navigation');

const chunkSize = 10;

module.exports = {
  name: 'unit_list',
  description: 'Displays all units',
  requirements: {},
  execute(client, msg, args) {
    const chunks = chunkSplit(units, chunkSize);

    const currentPage = 0;
    const maxPages = chunks.length;
    const embeds = chunks.map((chunk, index) => buildUnitsEmbed(chunk, index, maxPages, units.length));

    return msg.channel.send(embeds[currentPage])
        .then(message => addReactionsAndNavigate(msg, message, embeds, currentPage, maxPages));
  },
};

const buildUnitsEmbed = (units, index, total, totalUnits) => {
  const description = units.map((unit, unitIndex) => {
    const unitNumber = chunkSize * index + unitIndex + 1;
    return `**${unitNumber}. **[${unit.rarity}] ${unit.element.emoji} ${unit.name}`;
  }).join('\n');

  return new MessageEmbed()
      .setColor(ElementType.ELECTRO.color)
      .setTitle('Unit List')
      .setDescription(description)
      .setFooter(`Page ${index + 1}/${total} | Results: ${totalUnits}`);
};
