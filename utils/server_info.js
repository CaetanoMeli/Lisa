const discordCDN = require('../config').discordCDN;

const getServerImageInfo = (guild) => {
    let guildIconUrl;
    let guildBannerUrl;

    if (guild.icon) {
        const isAnimatedIcon = guild.icon.match(/(a_).+/g);
        const guildIcon = discordCDN.guildIconUrl
            .replace(discordCDN.guildIdHash, guild.id)
            .replace(discordCDN.guildIconHash, guild.icon)
            .replace(discordCDN.extensionHash, isAnimatedIcon ? 'gif' : 'png');

        guildIconUrl = `${discordCDN.baseUrl}/${guildIcon}`;
    }

    if (guild.banner) {
        const guildBanner = discordCDN.guildBannerUrl
            .replace(discordCDN.guildIdHash, guild.id)
            .replace(discordCDN.guildBannerHash, guild.banner);

        guildBannerUrl = `${discordCDN.baseUrl}/${guildBanner}`;
    }

    return {
        guildIconUrl,
        guildBannerUrl
    }
};

module.exports = getServerImageInfo;
