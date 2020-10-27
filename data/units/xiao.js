const SkillTypes = require('../skill_types');
const ElementTypes = require('../element_types');

module.exports = {
    id: 'xiao',
    name: 'Xiao',
    rarity: '★★★★★',
    element: ElementTypes.ANEMO,
    url: 'https://genshin.gg/characters/Xiao',
    thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/Xiao.png',
    info: {

    },
    skills: [
        {
            name: 'Whirlwind Thrust',
            type: SkillTypes.NORMAL_ATTACK,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Whirlwind_Thrust.png',
            rows: [
                {
                    name: 'Normal Attack',
                    value: 'Perform up to 6 rapid strikes.'
                },
                {
                    name: 'Charged Attack',
                    value: 'Dive down and impact the ground, causing damage relative to the falling height. Can only be triggered in mid-air.'
                }
            ],
            modifiers: [
                {
                    name: '1-Hit DMG',
                    value: '24% + 24%'
                },
                {
                    name: '2-Hit DMG',
                    value: '50%'
                },
                {
                    name: '3-Hit DMG',
                    value: '60%'
                },
                {
                    name: '4-Hit DMG',
                    value: '33% + 33%'
                },
                {
                    name: '5-Hit DMG',
                    value: '63%'
                },
                {
                    name: '6-Hit DMG',
                    value: '84%'
                },
                {
                    name: 'Charged Attack DMG',
                    value: '65%'
                },
                {
                    name: 'Height DMG',
                    value: '130% / 195%'
                }
            ]
        },
        {
            name: 'Lemniscatic Wind Cycling',
            type: SkillTypes.ELEMENTAL_SKILL,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Lemniscatic_Wind_Cycling.png',
            description: 'He lunges forward, dealing Anemo DMG to enemies along the path.\n' +
                'Can be used in mid-air.\n' +
                'Has 2 charges to begin with.',
            modifiers: [
                {
                    name: 'Skill DMG',
                    value: '229%'
                },
                {
                    name: 'CD',
                    value: '10s'
                }
            ]
        },
        {
            name: 'Bane of All Evil',
            type: SkillTypes.ELEMENTAL_BURST,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Bane_of_All_Evil.png',
            description: 'Takes on the form of the yaksha that terrified both demons and archons alike millennia ago. For its duration, increases Xiao\'s attack range and DMG, while converting damage type to **Anemo** and enhancing Xiao\'s jumping ability.\n' +
                'Maintaining this form continuously drains Xiao\'s HP.',
            modifiers: [
                {
                    name: 'Increased DMG',
                    value: '68.8%'
                },
                {
                    name: 'HP Loss',
                    value: '3% HP/s'
                },
                {
                    name: 'Duration',
                    value: '15s'
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
    constellations: [

    ]
};
