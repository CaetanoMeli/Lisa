const {MessageEmbed} = require('discord.js');
const units = require('../data/units');

module.exports = {
  name: 'skills',
  description: 'Displays a hero skills',
  requirements: {},
  execute(client, msg, args) {
    const heroName = args[0];
    const [hero] = units.filter(unit => unit.id === heroName);
    if (hero) {
      const embeds = hero.skills.map((skill, index) => buildSkillEmbed(hero, skill, index, hero.skills.length));

      return msg.channel.send(embeds[0]);
    }

    msg.channel.reply('Unit doesnt exist! Use l?unit_list to check the list of all units');
  },
};

const buildSkillEmbed = (hero, skill, index, total) => {
  let description = `**Type**: ${skill.type}`;
  if (skill.description) {
    description = `${description}\n\n${skill.description}`
  }

  const embed = new MessageEmbed()
      .setColor(hero.color)
      .setTitle(`[${hero.rarity}] ${hero.name}'s ${skill.name}`)
      .setURL(hero.url)
      .setThumbnail(skill.thumbnail)
      .setDescription(description)
      .setFooter(`Page ${index + 1}/${total}`);

  if (skill.rows) {
    skill.rows.forEach(row => {
      embed.addField(row.name, row.value, false)
    })
  }

  const modifiers = skill.modifiers.map(modifier => `**${modifier.name}**: ${modifier.value}`).join('\n');

  embed.addField('**Modifiers**', modifiers, false);

  return embed;
};