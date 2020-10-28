const SkillTypes = require('../skill_types');
const ElementTypes = require('../element_types');

module.exports = {
    id: 'traveler_anemo',
    name: 'Traveler (Anemo)',
    rarity: '★★★★★',
    element: ElementTypes.ANEMO,
    url: 'https://genshin.gg/characters/Traveler(Anemo)',
    thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/Traveler%20(Anemo).png',
    info: {

    },
    skills: [
        {
            name: 'Foreign Ironwind',
            type: SkillTypes.NORMAL_ATTACK,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Foreign_Ironwind.png',
            rows: [
                {
                    name: 'Normal Attack',
                    value: 'Performs up to 5 consecutive strikes.'
                },
                {
                    name: 'Charged Attack',
                    value: 'Consumes a certain amount of Stamina to unleash 2 rapid sword strikes.'
                },
                {
                    name: 'Plunging Attack',
                    value: 'Plunges from mid-air to strike the ground below, damaging enemies along the path and dealing AoE DMG upon impact.'
                },
            ],
            modifiers: [
                {
                    name: '1-Hit DMG',
                    value: '44.5%'
                },
                {
                    name: '2-Hit DMG',
                    value: '43.4%'
                },
                {
                    name: '3-Hit DMG',
                    value: '53%'
                },
                {
                    name: '4-Hit DMG',
                    value: '58.3%'
                },
                {
                    name: '5-Hit DMG',
                    value: '70.8%'
                },
                {
                    name: 'Charged Attack DMG',
                    value: '55.9% + 72.2%'
                },
                {
                    name: 'Charged Attack Stamina Cost',
                    value: '20'
                },
                {
                    name: 'Plunge DMG',
                    value: '63.9%'
                },
                {
                    name: 'Low / High Plunge DMG',
                    value: '128% / 160%'
                }
            ]
        },
        {
            name: 'Palm Vortex',
            type: SkillTypes.ELEMENTAL_SKILL,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Palm_Vortex.png',
            description: 'Grasping the wind\'s might, you form a vortex of vacuum in your palm, causing continuous **Anemo** DMG to enemies in front of you.\n' +
                'The vacuum vortex explodes when the skill duration ends, causing a greater amount of **Anemo** DMG over a larger area.',
            rows: [
                {
                    name: 'Hold',
                    value: 'DMG and AoE will gradually increase'
                },
                {
                    name: 'Elemental Absorption',
                    value: 'If the vortex comes in contact with **Hydro**/**Pyro**/**Cryo**/**Electro** elements, it will deal additional elemental DMG of that type.\n' +
                        'Elemental Absorption may only occur once per use.'
                }
            ],
            modifiers: [
                {
                    name: 'Initial Cutting DMG',
                    value: '12%'
                },
                {
                    name: 'Max Cutting DMG',
                    value: '16.8%'
                },
                {
                    name: 'Initial Storm DMG',
                    value: '176%'
                },
                {
                    name: 'Max Storm DMG',
                    value: '192%'
                },
                {
                    name: 'Base CD',
                    value: '5s'
                },

                {
                    name: 'Max Charging CD',
                    value: '8s'
                }
            ]
        },
        {
            name: 'Gust Surge',
            type: SkillTypes.ELEMENTAL_BURST,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Gust_Surge.png',
            description: 'Guiding the path of the wind currents, you summon a forward-moving tornado that pulls objects and opponents towards itself, dealing continuous **Anemo** DMG.',
            rows: [
                {
                    name: 'Elemental Absorption',
                    value: 'If the tornado comes in contact with **Hydro**/**Pyro**/**Cryo**/**Electro** elements, it will deal additional elemental DMG of that type.\n' +
                        'Elemental Absorption may only occur once per use.'
                }
            ],
            modifiers: [
                {
                    name: 'Tornado DMG',
                    value: '80.8%'
                },
                {
                    name: 'Additional Elemental DMG',
                    value: '24.8%'
                },
                {
                    name: 'Duration',
                    value: '6s'
                },
                {
                    name: 'CD',
                    value: '15s'
                },
                {
                    name: 'Energy Cost',
                    value: '60'
                },
            ]
        }
    ],
    passives: [
        {
            name: 'Slitting Wind',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Slitting_Wind.png',
            ascension: 'Unlocked at Ascension 1',
            description: 'The last hit of a Normal Attack combo unleashes a wind blade, dealing 60% of ATK as **Anemo** DMG to all opponents in its path.'
        },
        {
            name: 'Second Wind',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Second_Wind.png',
            ascension: 'Unlocked at Ascension 4',
            description: '**Palm Vortex** kills renegerate 2% HP for 5s. This effect can only occur once every 5s.'
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
