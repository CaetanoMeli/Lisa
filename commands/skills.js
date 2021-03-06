const {MessageEmbed} = require('discord.js');
const addReactionsAndNavigate = require('../utils/reaction_navigation');
const { parseFindUnitArgs, findUnitByName } = require('../utils/find_unit');

module.exports = {
  name: 'skills',
  description: 'Displays a unit\'s skills',
  requirements: {},
  execute(client, msg, args) {
    const { unitName, pageNumber } = parseFindUnitArgs(args);
    const hero = findUnitByName(unitName);
    if (hero) {
      const currentPage = pageNumber;
      const maxPages = hero.skills.length;
      const embeds = hero.skills.map((skill, index) => buildSkillEmbed(hero, skill, index, maxPages));

      return msg.channel.send(embeds[currentPage])
          .then(message => addReactionsAndNavigate(msg, message, embeds, currentPage, maxPages));
    }

    msg.reply('Unit doesnt exist! Use l?unit_list to check the list of all units');
  },
};

const buildSkillEmbed = (hero, skill, index, total) => {
  let description = `**Type**: ${skill.type}`;
  if (skill.description) {
    description = `${description}\n\n${skill.description}`
  }

  const embed = new MessageEmbed()
      .setColor(hero.element.color)
      .setAuthor(`[${hero.rarity}] ${hero.name}`, hero.thumbnail)
      .setTitle(`${skill.name}`)
      .setURL(hero.url)
      .setThumbnail(skill.thumbnail)
      .setDescription(description)
      .setFooter(`Page ${index + 1}/${total}`, hero.element.img);

  if (skill.rows) {
    skill.rows.forEach(row => {
      embed.addField(row.name, row.value, false)
    })
  }

  const modifiers = skill.modifiers.map(modifier => `**${modifier.name}**: ${modifier.value}`).join('\n');

  embed.addField('**Modifiers**', modifiers, false);

  return embed;
};
