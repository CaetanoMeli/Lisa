const { MessageEmbed } = require('discord.js');

class EmbedBuilder {
    static buildErrorEmbed = error => new MessageEmbed()
        .setColor("#ff8c00")
        .setTitle('An error has occured 🤯')
        .setDescription(`**Cause**: \n\`\`\`${error}\`\`\``)
        .setThumbnail('https://imgur.com/8JFdiWc.gif')
        .setTimestamp();
}

module.exports = EmbedBuilder;
