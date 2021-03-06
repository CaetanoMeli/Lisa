const SkillTypes = require('../skill_types');
const ElementTypes = require('../element_types');

module.exports = {
    id: 'diluc',
    name: 'Diluc',
    rarity: '★★★★★',
    element: ElementTypes.PYRO,
    url: 'https://genshin.gg/characters/Diluc',
    thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/Diluc.png',
    info: {

    },
    skills: [
        {
            name: 'Tempered Sword',
            type: SkillTypes.NORMAL_ATTACK,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Tempered_Sword.png',
            rows: [
                {
                    name: 'Normal Attack',
                    value: 'Performs up to 4 consecutive strikes.'
                },
                {
                    name: 'Charged Attack',
                    value: 'Drains Stamina over time to perform continuous slashes.\n' +
                        'At the end of the sequence, perform a more powerful slash.'
                },
                {
                    name: 'Plunging Attack',
                    value: 'Plunges from mid-air to strike the ground, damaging enemies along the path and dealing AoE DMG upon impact.'
                },
            ],
            modifiers: [
                {
                    name: '1-Hit DMG',
                    value: '89.7%'
                },
                {
                    name: '2-Hit DMG',
                    value: '87.6%'
                },
                {
                    name: '3-Hit DMG',
                    value: '98.8%'
                },
                {
                    name: '4-Hit DMG',
                    value: '134%'
                },
                {
                    name: 'Charged Attack Spinning DMG',
                    value: '68.8%'
                },
                {
                    name: 'Charged Attack Final DMG',
                    value: '125%'
                },
                {
                    name: 'Charged Attack Stamina Cost',
                    value: '40/s'
                },
                {
                    name: 'Max Duration',
                    value: '5s'
                },
                {
                    name: 'Plunge DMG',
                    value: '89.5%'
                },
                {
                    name: 'Low / High Plunge DMG',
                    value: '179% / 224%'
                }
            ]
        },
        {
            name: 'Searing Onslaught',
            type: SkillTypes.ELEMENTAL_SKILL,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Searing_Onslaught.png',
            description: 'Performs a forward slash that deals **Pyro** DMG.\n' +
                '\n' +
                'This skill can be used 3 times consecutively. Enters CD if not cast again within a short period.',
            modifiers: [
                {
                    name: '1-Hit DMG',
                    value: '94.4%'
                },
                {
                    name: '2-Hit DMG',
                    value: '97.6%'
                },
                {
                    name: '3-Hit DMG',
                    value: '129%'
                },
                {
                    name: 'CD',
                    value: '10s'
                }
            ]
        },
        {
            name: 'Dawn',
            type: SkillTypes.ELEMENTAL_BURST,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Dawn.png',
            description: 'Releases intense flames to knock nearby enemies back, dealing **Pyro** DMG. The flames then converge into the weapon, summoning a Phoenix that flies forward and deals massive **Pyro** DMG to all enemies in its path. The Phoenix explodes upon reaching its destination, causing a large amount of AoE **Pyro** DMG.\n' +
                'The searing flames that run down his blade cause Diluc\'s Normal and Charged Attacks to deal **Pyro** DMG for a time.',
            modifiers: [
                {
                    name: 'Slashing DMG',
                    value: '204%'
                },
                {
                    name: 'DoT',
                    value: '60%'
                },
                {
                    name: 'Explosion DMG',
                    value: '204%'
                },
                {
                    name: 'CD',
                    value: '12s'
                },
                {
                    name: 'Enchantment Duration',
                    value: '8s'
                },
                {
                    name: 'Energy Cost',
                    value: '40'
                },
            ]
        }
    ],
    passives: [
        {
            name: 'Relentless',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Relentless.png',
            ascension: 'Unlocked at Ascension 1',
            description: 'Diluc\'s Charged Attack Stamina Cost is decreased by 50%, and its duration is increased by 3s.'
        },
        {
            name: 'Blessing of Phoenix',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Blessing_of_Phoenix.png',
            ascension: 'Unlocked at Ascension 4',
            description: 'The **Pyro** Enchantment provided by **Dawn** lasts for 4s longer. Additionally, Diluc gains 20% **Pyro** DMG Bonus during the duration of this effect.'
        },
        {
            name: 'Tradition of the Dawn Knight',
            //FIXME thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Conqueror_of_Tides.png',
            ascension: 'Unlocked Automatically',
            description: 'Refunds 15% of the ores used when crafting Claymore-type weapons.'
        }
    ],
    constellations: [
        {
            name: 'One Arrow to Rule Them All',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/One_Arrow_to_Rule_Them_All.png',
            level: 'Constellation Lv. 1',
            description: ''
        },
        {
            name: 'One Arrow to Rule Them All',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/One_Arrow_to_Rule_Them_All.png',
            level: 'Constellation Lv. 2',
            description: ''
        },
        {
            name: 'One Arrow to Rule Them All',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/One_Arrow_to_Rule_Them_All.png',
            level: 'Constellation Lv. 3',
            description: ''
        },
        {
            name: 'One Arrow to Rule Them All',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/One_Arrow_to_Rule_Them_All.png',
            level: 'Constellation Lv. 4',
            description: ''
        },
        {
            name: 'One Arrow to Rule Them All',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/One_Arrow_to_Rule_Them_All.png',
            level: 'Constellation Lv. 5',
            description: ''
        },
        {
            name: 'One Arrow to Rule Them All',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/One_Arrow_to_Rule_Them_All.png',
            level: 'Constellation Lv. 6',
            description: ''
        }
    ]
};
