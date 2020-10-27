const {MessageEmbed} = require('discord.js');
const units = require('../data/units');
const ElementType = require('../data/element_types');
const UnitRarity = require('../data/unit_rarity');
const chunkSplit = require('../utils/chunks_split');
const sortListAlphabetically = require('../utils/sort_alphabetical');
const addReactionsAndNavigate = require('../utils/reaction_navigation');

const chunkSize = 10;

const picker = (unit) => unit.id;
const fourStarUnits = sortListAlphabetically(units.filter(unit => unit.rarity === UnitRarity.FOUR_STAR.icon), picker);
const fiveStarUnits = sortListAlphabetically(units.filter(unit => unit.rarity === UnitRarity.FIVE_STAR.icon), picker);

const unitList = [].concat(fiveStarUnits, fourStarUnits);
const chunks = chunkSplit(unitList, chunkSize);

module.exports = {
  name: 'unit_list',
  description: 'Displays all units',
  requirements: {},
  execute(client, msg, args) {
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
