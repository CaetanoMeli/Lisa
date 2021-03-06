const SkillTypes = require('../skill_types');
const ElementTypes = require('../element_types');

module.exports = {
    id: 'kaeya',
    name: 'Kaeya',
    rarity: '★★★★',
    element: ElementTypes.CRYO,
    url: 'https://genshin.gg/characters/Kaeya',
    thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/Kaeya.png',
    info: {

    },
    skills: [
        {
            name: 'Ceremonial Bladework',
            type: SkillTypes.NORMAL_ATTACK,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Ceremonial_Bladework.png',
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
                    value: '53.8%'
                },
                {
                    name: '2-Hit DMG',
                    value: '51.7%'
                },
                {
                    name: '3-Hit DMG',
                    value: '65.3%'
                },
                {
                    name: '4-Hit DMG',
                    value: '70.9%'
                },
                {
                    name: '5-Hit DMG',
                    value: '88.2%'
                },
                {
                    name: 'Charged Attack DMG',
                    value: '55% + 73.1%'
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
            name: 'Frostgnaw',
            type: SkillTypes.ELEMENTAL_SKILL,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Frostgnaw.png',
            description: 'Unleashes a frigit blast, dealing **Cryo** DMG to enemies in front of Kaeya.',
            modifiers: [
                {
                    name: 'Skill DMG',
                    value: '191%'
                },
                {
                    name: 'CD',
                    value: '6s'
                }
            ]
        },
        {
            name: 'Glacial Waltz',
            type: SkillTypes.ELEMENTAL_BURST,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Glacial_Waltz.png',
            description: 'Coalescing the frost in the air, Kaeya summons 3 icicles that revolve around him.\n' +
                'These icicles will follow the character around and deal **Cryo** DMG to enemies in their path for so long as they persist.',
            modifiers: [
                {
                    name: 'Skill DMG',
                    value: '77.6%'
                },
                {
                    name: 'CD',
                    value: '15s'
                },
                {
                    name: 'Duration',
                    value: '8s'
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
            name: 'Cold-Blooded Strike',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Cold-Blooded_Strike.png',
            ascension: 'Unlocked at Ascension 1',
            description: 'Every hit with **Frostgnaw** regenerates HP for Kaeya equal to 15% of ATK.'
        },
        {
            name: 'Heart of the Abyss',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Heart_of_the_Abyss.png',
            ascension: 'Unlocked at Ascension 4',
            description: 'Enemies Frozen by **Frostgnaw** will drop additional Elemental Particles.\n' +
                '**Frostgnaw** may only produce a maximum of 2 additional Elemental Particles per use.'
        },
        {
            name: 'Hidden Strength',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Hidden_Strength.png',
            ascension: 'Unlocked Automatically',
            description: 'Decreases all party member\'s sprinting Stamina consumption by 20%..'
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
