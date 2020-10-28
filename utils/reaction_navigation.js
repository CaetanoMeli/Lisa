const addReactionsAndNavigate = async (originalMsg, msg, embeds, currentPage, maxPages, time = 15000) => {
    const leftArrowEmoji = '⬅️';
    const rightArrowEmoji = '➡️';

    await msg.react(leftArrowEmoji);
    await msg.react(rightArrowEmoji);

    const filter = (reaction, user) => {
        return (reaction.emoji.name === leftArrowEmoji || reaction.emoji.name === rightArrowEmoji) && originalMsg.author.id === user.id;
    };

    const collector = msg.createReactionCollector(filter, { time });

    collector.on('collect', reaction => {
        switch (reaction.emoji.name) {
            case leftArrowEmoji:
                if (currentPage - 1 < 0) {
                    currentPage = maxPages - 1;
                } else {
                    currentPage -= 1;
                }
                msg.edit(embeds[currentPage]);
                break;
            case rightArrowEmoji:
                if (currentPage + 1 > maxPages) {
                    currentPage = 0;
                } else {
                    currentPage += 1;
                }
                msg.edit(embeds[currentPage]);
                break
        }
    });

    collector.on('end', () => {
        console.log('Deleting reactions');
        msg.reactions.removeAll()
            .catch(e => console.error('Failed to clear reactions: ', e))
    })
};

module.exports = addReactionsAndNavigate;
