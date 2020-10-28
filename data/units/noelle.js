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
    passives: [
        {
            name: 'Devotion',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Devotion.png',
            ascension: 'Unlocked at Ascension 1',
            description: 'When Noelle is in the party but not on the field, this ability triggers automatically when the active character\'s HP falls below 30%:\n' +
                'Creates a shield that lasts for 20s and absorbs DMG equal to 400% of Noelle\'s DEF. This effect can only occur once every 60s.'
        },
        {
            name: 'Nice and Clean',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Nice_and_Clean.png',
            ascension: 'Unlocked at Ascension 4',
            description: 'Every 4 Normal or Charged Attack hits will decrease the CD of **Breastplate** by 1s.\n' +
                'Hitting multiple enemies with a single attack is only counted as 1 hit.'
        },
        {
            name: 'Maid\'s Knighthood',
            //FIXME thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/General_Pharmaceutics.png',
            ascension: 'Unlocked Automatically',
            description: 'When a Perfect Cooking is achieved on a DEF-boosting dish, Noelle has a 12% chance to obtain double the product.'
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
