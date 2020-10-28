const SkillTypes = require('../skill_types');
const ElementTypes = require('../element_types');

module.exports = {
    id: 'sucrose',
    name: 'Sucrose',
    rarity: '★★★★',
    element: ElementTypes.ANEMO,
    url: 'https://genshin.gg/characters/Sucrose',
    thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/Sucrose.png',
    info: {

    },
    skills: [
        {
            name: 'Wind Spirit Creation',
            type: SkillTypes.NORMAL_ATTACK,
            //FIXME thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Sparkling_Scatter.png',
            rows: [
                {
                    name: 'Normal Attack',
                    value: 'Performs up to 4 attacks using Wind Spirits, dealing **Anemo** DMG.'
                },
                {
                    name: 'Charged Attack',
                    value: 'Consumes a certain amount of Stamina and deals AoE **Anemo** DMG after a short casting time.'
                },
                {
                    name: 'Plunging Attack',
                    value: 'Calling upon the power of her Wind Spirits, Sucrose plunges towards the ground from mid-air, damaging all enemies in her path. Deals AoE **Anemo** DMG upon impact with the ground.'
                },
            ],
            modifiers: [
                {
                    name: '1-Hit DMG',
                    value: '33.5%'
                },
                {
                    name: '2-Hit DMG',
                    value: '30.6%'
                },
                {
                    name: '3-Hit DMG',
                    value: '38.4%'
                },
                {
                    name: '4-Hit DMG',
                    value: '47.9%'
                },
                {
                    name: 'Charged Attack DMG',
                    value: '120%'
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
            name: 'Astable Anemohypostasis Creation - 6308',
            type: SkillTypes.ELEMENTAL_SKILL,
            //FIXME thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Jade_Screen.png',
            description: 'Creates a small Wind Spirit that deals **Anemo** DMG to enemies in an AoE, pulling them towards the location of the Wind Spirit before launching them.',
            modifiers: [
                {
                    name: 'Skill DMG',
                    value: '211%'
                },
                {
                    name: 'CD',
                    value: '15s'
                }
            ]
        },
        {
            name: 'Forbidden Creation - Isomer 75 / Type II',
            type: SkillTypes.ELEMENTAL_BURST,
            //FIXME thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Starshatter.png',
            description: 'Sucrose hurls an unstable concoction that creates a Large Wind Spirit. While it persists, the Large Wind Spirit will continuously pull and launch nearby enemies, dealing AoE **Anemo** DMG.',
            rows: [
                {
                    name: 'Elemental Absorption',
                    value: 'If the Wind Spirit comes into contact with **Hydro** / **Pyro** / **Cryo** / **Electro** elements, it will deal additional DMG of that type.\n' +
                        'Elemental Absorption may only occur once per use.'
                }
            ],
            modifiers: [
                {
                    name: 'DoT',
                    value: '148%'
                },
                {
                    name: 'Additional Elemental DMG',
                    value: '44%'
                },
                {
                    name: 'Duration',
                    value: '6s'
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
            name: 'Catalyst Conversion',
            //FIXME thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Induced_Aftershock.png',
            ascension: 'Unlocked at Ascension 1',
            description: 'When Sucrose triggers a Swirl effect, characters in the party with the matching element have their Elemental Mastery increased by 50 for 8s.'
        },
        {
            name: 'Mollis Favonius',
            //FIXME thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Static_Electricity_Field.png',
            ascension: 'Unlocked at Ascension 4',
            description: 'When **Astable Anemohypostatis Creation - 6308** or **Forbidden Creation - Isomer 75 / Type II** hit an enemy, increases other party member\'s Elemental Mastery based on 20% of Sucrose\'s Elemental Mastery for 8s.'
        },
        {
            name: 'Astable Invention',
            //FIXME thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/General_Pharmaceutics.png',
            ascension: 'Unlocked Automatically',
            description: 'When Sucrose crafts Character and Weapon Enhancement Materials, she has a 10% to obtain double the product.'
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
