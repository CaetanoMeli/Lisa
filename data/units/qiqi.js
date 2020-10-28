const SkillTypes = require('../skill_types');
const ElementTypes = require('../element_types');

module.exports = {
    id: 'qiqi',
    name: 'Qiqi',
    rarity: '★★★★★',
    element: ElementTypes.CRYO,
    url: 'https://genshin.gg/characters/Qiqi',
    thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/Qiqi.png',
    info: {

    },
    skills: [
        {
            name: 'Ancient Sword Art',
            type: SkillTypes.NORMAL_ATTACK,
            //FIXME thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Favonius_Bladework.png',
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
                    value: 'Plunges from mid-air to strike the ground below, damaging enemies along the path and dealing AoE DMG upon impact.'
                },
            ],
            modifiers: [
                {
                    name: '1-Hit DMG',
                    value: '37.8%'
                },
                {
                    name: '2-Hit DMG',
                    value: '38.9%'
                },
                {
                    name: '3-Hit DMG',
                    value: '24.2% + 24.2%'
                },
                {
                    name: '4-Hit DMG',
                    value: '24.7% + 24.7%'
                },
                {
                    name: '5-Hit DMG',
                    value: '63%'
                },
                {
                    name: 'Charged Attack DMG',
                    value: '64.3% + 64.3%'
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
            name: 'Adeptus Art: Herald of Frost',
            type: SkillTypes.ELEMENTAL_SKILL,
            //FIXME thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Gale_Blade.png',
            description: 'Using the Icevein Talisman, Qiqi brings forth the Herald of Frost, dealing **Cryo** DMG to nearby enemies.',
            rows: [
                {
                    name: 'Herald of Frost',
                    value: '• When Qiqi hits a target with her Normal or Charged Attacks, she regenerates HP for all party members and all nearby allied characters. Healing scales based on Qiqi\'s ATK.\n' +
                        '• Regenerates HP for current character at regular intervals.\n' +
                        '• Follows the character around, dealing Cryo DMG to enemies in its path.'
                }
            ],
            modifiers: [
                {
                    name: 'Skill DMG',
                    value: '96%'
                },
                {
                    name: 'Regeneration on Hit',
                    value: '10.56% ATK + 67'
                },
                {
                    name: 'Continuous Regeneration',
                    value: '69.60% ATK + 451'
                },
                {
                    name: 'Herald of Frost DMG',
                    value: '36%'
                },
                {
                    name: 'Duration',
                    value: '15s'
                },
                {
                    name: 'CD',
                    value: '30s'
                }
            ]
        },
        {
            name: 'Adeptus Art: Preserver of Fortune',
            type: SkillTypes.ELEMENTAL_BURST,
            //FIXME thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Dandelion_Breeze.png',
            description: 'Qiqi releases the adeptus power sealed within her body, marking nearby enemies with a Fortune-Preserving Talisman that deals **Cryo** DMG.',
            rows: [
                {
                    name: 'Fortune-Preserving Talisman',
                    value: 'When enemies affected by this Talisman take DMG, the character that dealt this DMG regenerates HP.'
                }
            ],
            modifiers: [
                {
                    name: 'Skill DMG',
                    value: '285%'
                },
                {
                    name: 'Healing',
                    value: '90% ATK + 577'
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
    passives: [
        {
            name: 'Life-Prolonging Methods',
            //FIXME thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Induced_Aftershock.png',
            ascension: 'Unlocked at Ascension 1',
            description: 'When a character under the effects of Adeptus Art: Herald of Frost triggers an Elemental Reaction, their Incoming Healing Bonus is increased by 20% for 8s.'
        },
        {
            name: 'A Glimpse into Arcanum',
            //FIXME thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Static_Electricity_Field.png',
            ascension: 'Unlocked at Ascension 4',
            description: 'When Qiqi hits enemies with her Normal and Charged Attacks, she has a 50% chance to apply a Fortune-Preserving Talisman to them for 6s. This effect can only occur once every 30s.'
        },
        {
            name: 'Former Life Memories',
            //FIXME thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/General_Pharmaceutics.png',
            ascension: 'Unlocked Automatically',
            description: 'Displays the location of nearby resources unique to Liyue on the mini-map.'
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
