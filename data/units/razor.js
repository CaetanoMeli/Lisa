const SkillTypes = require('../skill_types');
const ElementTypes = require('../element_types');

module.exports = {
    id: 'razor',
    name: 'Razor',
    rarity: '★★★★',
    element: ElementTypes.ELECTRO,
    url: 'https://genshin.gg/characters/Razor',
    thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/Razor.png',
    info: {

    },
    skills: [
        {
            name: 'Steel Fang',
            type: SkillTypes.NORMAL_ATTACK,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Steel_Fang.png',
            rows: [
                {
                    name: 'Normal Attack',
                    value: 'Performs up to 4 consecutive strikes.'
                },
                {
                    name: 'Charged Attack',
                    value: 'Drains Stamina over time to perform continuous swirling attacks against all nearby enemies.\n' +
                        'At end of the sequence, perform a more powerful slash.'
                },
                {
                    name: 'Plunging Attack',
                    value: 'Plunges from mid-air to strike the ground below, damaging enemies along the path and dealing AoE DMG upon impact.'
                },
            ],
            modifiers: [
                {
                    name: '1-Hit DMG',
                    value: '95.9%'
                },
                {
                    name: '2-Hit DMG',
                    value: '82.6%'
                },
                {
                    name: '3-Hit DMG',
                    value: '103%'
                },
                {
                    name: '4-Hit DMG',
                    value: '136%'
                },
                {
                    name: 'Charged Attack Spinning DMG',
                    value: '62.5%'
                },
                {
                    name: 'Charged Attack Final DMG',
                    value: '113%'
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
                    value: '82%'
                },
                {
                    name: 'Low / High Plunge DMG',
                    value: '164% / 205%'
                }
            ]
        },
        {
            name: 'Claw and Thunder',
            type: SkillTypes.ELEMENTAL_SKILL,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Claw_and_Thunder.png',
            description: 'Hunts his prey using the techniques taught to him by his master and his Lupical.',
            rows: [
                {
                    name: 'Press',
                    value: 'Swings the Thunder Wolf Claw, dealing **Electro** DMG to enemies in front of Razor.\n' +
                        'Upon striking an enemy, Razor will gain an **Electro** Sigil, which increases his Energy Recharge rate.\n' +
                        'Razor can have up to 3 **Electro** Sigils simultaneously, and gaining a new **Electro** Sigil refreshes their duration.'
                },
                {
                    name: 'Hold',
                    value: 'Gathers **Electro** energy to unleash a lightning storm over a small AoE, causing massive **Electro** DMG, and clears all of Razor\'s **Electro** Sigils.\n' +
                        'Each **Electro** Sigil cleared in this manner will be converted into Energy for Razor.'
                }
            ],
            modifiers: [
                {
                    name: 'Press Skill DMG',
                    value: '199%'
                },
                {
                    name: 'Hold Skill DMG',
                    value: '295%'
                },
                {
                    name: 'Energy Recharge Bonus',
                    value: '20% per electro sigil'
                },
                {
                    name: 'Energy Regenerated',
                    value: '5 per electro sigil absorbed'
                },
                {
                    name: 'Electro Sigil Duration',
                    value: '18s'
                },
                {
                    name: 'Press CD',
                    value: '6s'
                },
                {
                    name: 'CD (hold)',
                    value: '10s'
                }
            ]
        },
        {
            name: 'Lightning Fang',
            type: SkillTypes.ELEMENTAL_BURST,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Lightning_Fang.png',
            description: 'Summons the Wolf Within which deals **Electro** DMG to all nearby opponents. This clears all of Razor\'s **Electro** Sigils, which will be converted into elemental energy for him.\n' +
                'The Wolf Within will fight alongside Razor for the skill\'s duration.',
            rows: [
                {
                    name: 'The Wolf Within',
                    value: '• Strikes alongside Razor\'s normal attacks, dealing **Electro** DMG.\n' +
                        '• Raises Razor\'s ATK SPD and **Electro** RES.\n' +
                        '• Causes Razor to be immune to DMG inflicted by the Electro-Charged status.\n' +
                        '• Disables Razor\'s Charged Attacks.\n' +
                        '\n' +
                        'The effects end when Razor leaves the battlefield.\n' +
                        'When Razor leaves the field, a maximum of 10 Energy will be returned to him based off the duration remaining on this skill.'
                }
            ],
            modifiers: [
                {
                    name: 'Elemental Burst DMG',
                    value: '125%'
                },
                {
                    name: 'Soul Companion DMG',
                    value: '20% normal attack DMG'
                },
                {
                    name: 'Normal Attack SPD Bonus',
                    value: '20%'
                },
                {
                    name: 'Electro RES Bonus',
                    value: '50%'
                },
                {
                    name: 'Duration',
                    value: '15s'
                },
                {
                    name: 'CD',
                    value: '20s'
                },
                {
                    name: 'Energy Cost',
                    value: '80'
                },
            ]
        }
    ],
    passives: [
        {
            name: 'Awakening',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Awakening.png',
            ascension: 'Unlocked at Ascension 1',
            description: 'Decreases **Claw and Thunder**\'s CD by 18%.\n' +
                'Using **Lightning Fang** resets the CD of **Claw and Thunder**.'
        },
        {
            name: 'Hunger',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Hunger.png',
            ascension: 'Unlocked at Ascension 4',
            description: 'When Razor\'s Energy is below 50%, increases Energy Recharge by 30%.'
        },
        {
            name: 'Wolvensprint',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Wolvensprint.png',
            ascension: 'Unlocked Automatically',
            description: 'Decreases all party member\'s sprinting Stamina Consumption by 20%.'
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
