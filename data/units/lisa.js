const SkillTypes = require('../skill_types');
const ElementTypes = require('../element_types');

module.exports = {
    id: 'lisa',
    name: 'Lisa',
    rarity: '★★★★',
    element: ElementTypes.ELECTRO,
    url: 'https://genshin.gg/characters/Lisa',
    thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/Lisa.png',
    info: {

    },
    skills: [
        {
            name: 'Lightning Touch',
            type: SkillTypes.NORMAL_ATTACK,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Lightning_Touch.png',
            rows: [
                {
                    name: 'Normal Attack',
                    value: 'Perform up to 4 lightning attacks that deal **Electro** DMG.'
                },
                {
                    name: 'Charged Attack',
                    value: 'Consumes a certain amount of Stamina to deal AoE **Electro** DMG after a short casting time.'
                },
                {
                    name: 'Plunging Attack',
                    value: 'Gathering the might of Electro, Lisa plunges towards the ground from mid-air, damaging all enemies in her path. Deals AoE **Electro** DMG upon impact with the ground.'
                },
            ],
            modifiers: [
                {
                    name: '1-Hit DMG',
                    value: '39.6%'
                },
                {
                    name: '2-Hit DMG',
                    value: '35.9%'
                },
                {
                    name: '3-Hit DMG',
                    value: '42.8%'
                },
                {
                    name: '4-Hit DMG',
                    value: '55%'
                },
                {
                    name: 'Charged Attack DMG',
                    value: '177%'
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
            name: 'Violet Arc',
            type: SkillTypes.ELEMENTAL_SKILL,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Violet_Arc.png',
            description: 'Channels the power of lightning to sweep bothersome matters away.',
            rows: [
                {
                    name: 'Press',
                    value: 'Releases a homing Lightning Orb. On hit, it deals **Electro** DMG, and applies a stack of Conductive status (Max 3 stacks) to enemies in a small AoE.'
                },
                {
                    name: 'Hold',
                    value: 'After an extended casting time, calls down lightning from the heavens, dealing massive **Electro** DMG to all nearby enemies.\n' +
                        'Deals great amounts of extra damage to enemies based on the number of Conductive stacks applied to them, and clears their Conductive status.'
                }
            ],
            modifiers: [
                {
                    name: 'Press DMG',
                    value: '80%'
                },
                {
                    name: 'Press CD',
                    value: '1s'
                },
                {
                    name: 'Non-Conductive Hold DMG',
                    value: '320%'
                },
                {
                    name: 'Stack 1 Conductive Hold DMG',
                    value: '368%'
                },
                {
                    name: 'Stack 2 Conductive Hold DMG',
                    value: '424%'
                },
                {
                    name: 'Stack 3 Conductive Hold DMG',
                    value: '487%'
                },
                {
                    name: 'CD',
                    value: '16s'
                }
            ]
        },
        {
            name: 'Lightning Rose',
            type: SkillTypes.ELEMENTAL_BURST,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Lightning_Rose.png',
            description: 'Summons a **Lightning Rose** that unleashes powerful lightning bolts, launching surrounding enemies and dealing **Electro** DMG.\n' +
                'The **Lightning Rose** will continuously emit lightning to knock back enemies and deal **Electro** DMG for so long as it persists.',
            modifiers: [
                {
                    name: 'Discharge DMG',
                    value: '36.6%'
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
            name: 'Induced Aftershock',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Induced_Aftershock.png',
            ascension: 'Unlocked at Ascension 1',
            description: 'Hits by charged Attacks apply **Violet Arc**\'s Conductive status to enemies.'
        },
        {
            name: 'Static Electricity Field',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Static_Electricity_Field.png',
            ascension: 'Unlocked at Ascension 4',
            description: 'Enemies hit by **Lightning Rose** have their DEF decreased by 15% for 10s.'
        },
        {
            name: 'General Pharmaceutics',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/General_Pharmaceutics.png',
            ascension: 'Unlocked Automatically',
            description: 'When Lisa crafts a potion, she has a 20% chance to refund a portion of the crafting materials used.'
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
