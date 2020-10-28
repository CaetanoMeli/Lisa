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
    passives: [
        {
            name: 'Evil Conqueror - Tamer of Demons',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Evil_Conqueror_-_Tamer_of_Demons.png',
            ascension: 'Unlocked at Ascension 1',
            description: 'Starting **Bane of All Evil** increases Xiao\'s DMG by 5%. After this, Xiao\'s DMG continues to increase by 5% every 3s until the skill ends. Max 25% increase.'
        },
        {
            name: 'Dissolution Eon - Heaven Fall',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Dissolution_Eon_-_Heaven_Fall.png',
            ascension: 'Unlocked at Ascension 4',
            description: 'When **Lemniscatic Wind Cycling** is used, increases all subsequent **Lemniscatic Wind Cycling**\'s DMG by 10% for 6s. Max 3 stacks. Duration refreshes with new stacks.'
        },
        {
            name: 'Transcension - Gravity Defier',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Transcension_-_Gravity_Defier.png',
            ascension: 'Unlocked Automatically',
            description: 'Decreases all party member\'s falling DMG by 30%.\n' +
                'The greatest effect out of all Talents of the same type prevails.'
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
