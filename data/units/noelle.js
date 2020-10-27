const SkillTypes = require('../skill_types');
const ElementTypes = require('../element_types');

module.exports = {
    id: 'noelle',
    name: 'Noelle',
    rarity: '★★★★',
    element: ElementTypes.GEO,
    url: 'https://genshin.gg/characters/Noelle',
    thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/Noelle.png',
    info: {

    },
    skills: [
        {
            name: 'Favonius Bladework - Maid',
            type: SkillTypes.NORMAL_ATTACK,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Favonius_Bladework_-_Maid.png',
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
                    value: '79.1%'
                },
                {
                    name: '2-Hit DMG',
                    value: '73.4%'
                },
                {
                    name: '3-Hit DMG',
                    value: '86.3%'
                },
                {
                    name: '4-Hit DMG',
                    value: '113%'
                },
                {
                    name: 'Charged Attack Spinning DMG',
                    value: '50.7%'
                },
                {
                    name: 'Charged Attack Final DMG',
                    value: '90.5%'
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
                    value: '74.6%'
                },
                {
                    name: 'Low / High Plunge DMG',
                    value: '149% / 186%'
                }
            ]
        },
        {
            name: 'Breastplate',
            type: SkillTypes.ELEMENTAL_SKILL,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Breastplate.png',
            description: 'Summons a protective stone armor, dealing **Geo** DMG to surrounding enemies and creating a shield. The shield\'s DMG Absorption scaled based on Noelle\'s DEF.\n' +
                'The shield has the following properties:\n' +
                '\n' +
                '• When Noelle\'s Normal and Charged Attacks hit a target, they have a certain chance to regenerate HP for all characters, both on and off the field.\n' +
                '• Applies the **Geo** element to the character.\n' +
                '• Possesses 250% Absorption Efficiency against **Geo** DMG.\n' +
                '\n' +
                'The amount of HP healed when regeneration is triggered scales based on Noelle\'s DEF.',
            modifiers: [
                {
                    name: 'Skill DMG',
                    value: '120% DEF'
                },
                {
                    name: 'DMG Absorption',
                    value: '160% DEF + 770'
                },
                {
                    name: 'Healing',
                    value: '21.3% DEF + 103'
                },
                {
                    name: 'Healing Triggering Chance',
                    value: '50%'
                },
                {
                    name: 'Duration',
                    value: '12s'
                },
                {
                    name: 'CD',
                    value: '24s'
                }
            ]
        },
        {
            name: 'Sweeping Time',
            type: SkillTypes.ELEMENTAL_BURST,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Sweeping_Time.png',
            description: 'Gathering the strength of stone around her weapon, Noelle strikes the enemies surrounding her within a large AoE, dealing **Geo** DMG.\n' +
                'Afterwards, Noelle gains the following effects:\n' +
                '• Larger attack AoE.\n' +
                '• Converts attack DMG to **Geo** DMG.\n' +
                '• Increased ATK that scales based on her DEF.',
            modifiers: [
                {
                    name: 'Elemental Burst DMG',
                    value: '67.2%'
                },
                {
                    name: 'Skill DMG',
                    value: '92.8%'
                },
                {
                    name: 'ATK Bonus',
                    value: '40% DEF'
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
