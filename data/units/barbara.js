const SkillTypes = require('../skill_types');
const ElementTypes = require('../element_types');

module.exports = {
    id: 'barbara',
    name: 'Barbara',
    rarity: '★★★★',
    element: ElementTypes.HYDRO,
    url: 'https://genshin.gg/characters/Barbara',
    thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/Barbara.png',
    info: {

    },
    skills: [
        {
            name: 'Whisper of Water',
            type: SkillTypes.NORMAL_ATTACK,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Whisper_of_Water.png',
            rows: [
                {
                    name: 'Normal Attack',
                    value: 'Performs up to 4 water splashes that deal **Hydro** DMG.'
                },
                {
                    name: 'Charged Attack',
                    value: 'Consumes a certain amount of Stamina to deal AoE **Hydro** DMG after a short casting time.'
                },
                {
                    name: 'Plunging Attack',
                    value: 'Gathering the might of Hydro, Barbara plunges towards the ground from mid-air, damaging all enemies in her path. Deals AoE **Hydro** DMG upon impact with the ground.'
                },
            ],
            modifiers: [
                {
                    name: '1-Hit DMG',
                    value: '37.8%'
                },
                {
                    name: '2-Hit DMG',
                    value: '35.5%'
                },
                {
                    name: '3-Hit DMG',
                    value: '41%'
                },
                {
                    name: '4-Hit DMG',
                    value: '55.2%'
                },
                {
                    name: 'Charged Attack DMG',
                    value: '166%'
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
            name: 'Let the Show Begin',
            type: SkillTypes.ELEMENTAL_SKILL,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Let_the_Show_Begin.png',
            description: 'Summons water droplets resembling musical notes that form a Melody Loop, dealing **Hydro** DMG to surrounding enemies and afflicting them with the Wet status.',
            rows: [
                {
                    name: 'Melody Loop',
                    value: '• Barbara\'s Normal Attacks heal all party members and nearby allied characters for a certain amount of HP, which scales with Barbara\'s Max HP.\n' +
                        '• Her Charged Attack generates 4 times the amount of healing.\n' +
                        '• Regenerates a certain amount of the current character\'s HP at regular intervals.\n' +
                        '• Applies the Wet status to the character and enemies who come in contact with them.'
                },
            ],
            modifiers: [
                {
                    name: 'HP Regeneration Per Hit',
                    value: '0.75% Max HP + 72'
                },
                {
                    name: 'Continuous Regeneration',
                    value: '4% Max HP + 385'
                },
                {
                    name: 'Droplet DMG',
                    value: '58.4%'
                },
                {
                    name: 'Duration',
                    value: '15s'
                },
                {
                    name: 'CD',
                    value: '32s'
                }
            ]
        },
        {
            name: 'Shining Miracle',
            type: SkillTypes.ELEMENTAL_BURST,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Shining_Miracle.png',
            description: 'Heals friendly forces and all parties for a large amount of HP that scales with Barbara\'s Max HP.',
            modifiers: [
                {
                    name: 'Healing Amount',
                    value: '17.6% Max HP + 1694'
                },
                {
                    name: 'CD',
                    value: '20s'
                },
                {
                    name: 'Energy Cost',
                    value: '80'
                }
            ]
        }
    ],
    passives: [
        {
            name: 'Glorious Season',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Glorious_Season.png',
            ascension: 'Unlocked at Ascension 1',
            description: 'The Stamina Consumption of characters within **Let the Show Begin**\'s Melody Loop is reduced by 12%.'
        },
        {
            name: 'Encore',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Precise_Shot.png',
            ascension: 'Unlocked at Ascension 4',
            description: 'When a character gains an Elemental Orb/Particle, the duration of **Let the Show Begin**\'s Melody Loop is extended by 1s.\n' +
                'The maximum extension is 5s.'
        },
        {
            name: 'With My Whole Heart',
            //FIXME thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Gliding_Champion.png',
            ascension: 'Unlocked Automatically',
            description: 'When a Perfect Cooking is achieved on a dish with restorative effects, there is a 12% chance to obtain double the product.'
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
