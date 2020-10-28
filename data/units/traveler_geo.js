const SkillTypes = require('../skill_types');
const ElementTypes = require('../element_types');

module.exports = {
    id: 'traveler_geo',
    name: 'Traveler (Geo)',
    rarity: '★★★★★',
    element: ElementTypes.GEO,
    url: 'https://genshin.gg/characters/Traveler(Geo)',
    thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/Traveler%20(Geo).png',
    info: {

    },
    skills: [
        {
            name: 'Foreign Rockblade',
            type: SkillTypes.NORMAL_ATTACK,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Foreign_Rockblade.png',
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
            name: 'Starfell Sword',
            type: SkillTypes.ELEMENTAL_SKILL,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Starfell_Sword.png',
            description: 'You disgorge a meteorite from the depths of the earth, dealing AoE **Geo** DMG.\n' +
                'The meteorite is considered a **Geo** Construct, and can be climbed or used to block attacks.',
            rows: [
                {
                    name: 'Hold',
                    value: 'The skill\'s positioning may be adjusted.'
                }
            ],
            modifiers: [
                {
                    name: 'Skill DMG',
                    value: '248%'
                },
                {
                    name: 'Meteorite Duration',
                    value: '30s'
                },

                {
                    name: 'CD',
                    value: '8s'
                }
            ]
        },
        {
            name: 'Wake of Earth',
            type: SkillTypes.ELEMENTAL_BURST,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Wake_of_Earth.png',
            description: 'Energizing the **Geo** elements deep underground, you set off expanding shockwaves.\n' +
                '\n' +
                'Launches surrounding enemies back and deals AoE **Geo** DMG.\n' +
                '\n' +
                'A stone wall is erected at the edges of the shockwave.\n' +
                '\n' +
                'The stone wall is considered a **Geo** Construct, and may be used to block attacks.',
            modifiers: [
                {
                    name: 'DMG Per Shockwave',
                    value: '148%'
                },
                {
                    name: 'Stonewall Duration',
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
            name: 'Shattered Darkrock',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Shattered_Darkrock.png',
            ascension: 'Unlocked at Ascension 1',
            description: 'Reduces Starfell Sword\'s CD by 2s.'
        },
        {
            name: 'Frenzied Rockslide',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Frenzied_Rockslide.png',
            ascension: 'Unlocked at Ascension 4',
            description: 'The final hit of a Normal Attack combo triggers a collapse, dealing 60% of ATK as AoE **Geo** DMG.'
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
