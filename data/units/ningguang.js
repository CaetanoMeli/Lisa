const SkillTypes = require('../skill_types');
const ElementTypes = require('../element_types');

module.exports = {
    id: 'ningguang',
    name: 'Ningguang',
    rarity: '★★★★',
    element: ElementTypes.GEO,
    url: 'https://genshin.gg/characters/Ningguang',
    thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/Ningguang.png',
    info: {

    },
    skills: [
        {
            name: 'Sparkling Scatter',
            type: SkillTypes.NORMAL_ATTACK,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Sparkling_Scatter.png',
            rows: [
                {
                    name: 'Normal Attack',
                    value: 'Shoots gems that deal **Geo** DMG.\n' +
                        'Upon hit, this grants Ningguang 1 Star Jade.'
                },
                {
                    name: 'Charged Attack',
                    value: 'Consumes a certain amount of Stamina to fire off a giant gem that deals **Geo** DMG.\n' +
                        'If Ningguang has any Star Jades, unleashing a Charged Attack will cause the Star Jades to be fired at the enemy as well, dealing additional DMG.'
                },
                {
                    name: 'Plunging Attack',
                    value: 'Gathering the might of Geo, Ningguang plunges towards the ground from mid-air, damaging all enemies in her path. Deals AoE **Geo** DMG upon impact with the ground.'
                },
            ],
            modifiers: [
                {
                    name: 'Normal Attack DMG',
                    value: '28%'
                },
                {
                    name: 'Charged Attack DMG',
                    value: '174%'
                },
                {
                    name: 'DMG per Star Jade',
                    value: '49.6%'
                },
                {
                    name: 'Charged Attack Stamina Cost',
                    value: '50'
                },
                {
                    name: 'Plunge DMG',
                    value: '56.8%'
                },
                {
                    name: 'Low / High Plunge DMG',
                    value: '114% / 142%'
                }
            ]
        },
        {
            name: 'Jade Screen',
            type: SkillTypes.ELEMENTAL_SKILL,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Jade_Screen.png',
            description: 'Ningguang creates a Jade Screen out of gold, obsidian and her great opulence, dealing AoE **Geo** DMG.',
            rows: [
                {
                    name: 'Jade Screen',
                    value: '• Blocks enemy projectiles.\n' +
                        '• Endurance scales based on Ningguang\'s Max HP.\n' +
                        '\n' +
                        '**Jade Screen** is considered a **Geo** Construct and can be used to block certain attacks, but cannot be climbed. Only one **Jade Screen** may exist at any one time.'
                },
            ],
            modifiers: [
                {
                    name: 'Inherited HP',
                    value: '50.1%'
                },
                {
                    name: 'Skill DMG',
                    value: '230%'
                },
                {
                    name: 'CD',
                    value: '12s'
                }
            ]
        },
        {
            name: 'Starshatter',
            type: SkillTypes.ELEMENTAL_BURST,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Starshatter.png',
            description: 'Gathering a great number of gems, Ningguang scatters them all at once, sending homing projectiles at her enemies that deal massive **Geo** DMG.\n' +
                'If **Starshatter** is cast when a **Jade Screen** is nearby, the **Jade Screen** will fire additional gem projectiles at the same time.',
            modifiers: [
                {
                    name: 'DMG per Gem',
                    value: '87%'
                },
                {
                    name: 'CD',
                    value: '12s'
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
            name: 'Backup Plan',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Backup_Plan.png',
            ascension: 'Unlocked at Ascension 1',
            description: 'When Ningguang is in possession of Star Jades, her Charged Attack does not consume Stamina.'
        },
        {
            name: 'Strategic Reserve',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Strategic_Reserve.png',
            ascension: 'Unlocked at Ascension 4',
            description: 'A character that passes through the Jade Screen will gain a 12% Geo DMG Bonus for 10s.'
        },
        {
            name: 'Trove of Marvelous Treasure',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Trove_of_Marvelous_Treasure.png',
            ascension: 'Unlocked Automatically',
            description: 'Displays the location of nearby ore veins (Iron Ore, White Iron Ore, Crystal Ore, and Magical Crystal Ore) on the mini-map.'
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
