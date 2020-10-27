const SkillTypes = require('../skill_types');
const ElementTypes = require('../element_types');

module.exports = {
    id: 'xingqiu',
    name: 'Xingqiu',
    rarity: '★★★★',
    element: ElementTypes.HYDRO,
    url: 'https://genshin.gg/characters/Xingqiu',
    thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/Xingqiu.png',
    info: {

    },
    skills: [
        {
            name: 'Guhua Style',
            type: SkillTypes.NORMAL_ATTACK,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Guhua_Style.png',
            rows: [
                {
                    name: 'Normal Attack',
                    value: 'Performs up to 5 rapid strikes.'
                },
                {
                    name: 'Charged Attack',
                    value: 'Consumes a certain amount of Stamina to unleash 2 rapid sword strikes.'
                },
                {
                    name: 'Plunging Attack',
                    value: 'Plunges from mid-aur to strike the ground below, damaging enemies along the path and dealing AoE DMG upon impact.'
                },
            ],
            modifiers: [
                {
                    name: '1-Hit DMG',
                    value: '46.6%'
                },
                {
                    name: '2-Hit DMG',
                    value: '47.6%'
                },
                {
                    name: '3-Hit DMG',
                    value: '28.6% + 28.6%'
                },
                {
                    name: '4-Hit DMG',
                    value: '56%'
                },
                {
                    name: '5-Hit DMG',
                    value: '35.9% + 35.9%'
                },
                {
                    name: 'Charged Attack DMG',
                    value: '47.3% + 56.2%'
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
            name: 'Guhua Sword - Fatal Rainscreen',
            type: SkillTypes.ELEMENTAL_SKILL,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Guhua_Sword_-_Fatal_Rainscreen.png',
            description: 'Xingqiu performs twin strikes with his sword, dealing **Hydro** DMG. At the same time, this ability creates the maximum number of Rain Swords, which will orbit the character.\n' +
                'The Rain Swords have the following properties:\n' +
                '\n' +
                '• When a character takes DMG, the Rain Sword will shatter, reducing the amount of DMG taken.\n' +
                '• Increases the character\'s resistance to interruption.\n' +
                '\n' +
                '20% of Xingqui\'s **Hydro** DMG Bonus will be converted to additional DMG Reduction for the Rain Swords.\n' +
                '\n' +
                'The maximum amount of additional DMG Reduction that can be gained this way is 24%.\n' +
                'The initial maximum number of Rain Swords is 3.\n' +
                'Using this ability applies the Wet status onto the character.',
            modifiers: [
                {
                    name: 'Skill DMG',
                    value: '168% + 191%'
                },
                {
                    name: 'Damage Reduction Ratio',
                    value: '20%'
                },
                {
                    name: 'Duration',
                    value: '15s'
                },
                {
                    name: 'CD',
                    value: '21s'
                }
            ]
        },
        {
            name: 'Guhua Sword - Raincutter',
            type: SkillTypes.ELEMENTAL_BURST,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Guhua_Sword_-_Raincutter.png',
            description: 'Initiate Rainbow Bladework and fight using an illusory sword rain, while creating the maximum number of Rain Swords.',
            rows: [
                {
                    name: 'Rainbow Bladework',
                    value: '• Normal Attacks will trigger consecutive sword rain attacks, dealing Hydro DMG.\n' +
                        '• Rain Swords will remain at the maximum number throughout the ability\'s duration.\n' +
                        '\n' +
                        'These effects carry over to other characters.'
                }
            ],
            modifiers: [
                {
                    name: 'Sword Rain DMG',
                    value: '54.3%'
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
    constellations: [

    ]
};
