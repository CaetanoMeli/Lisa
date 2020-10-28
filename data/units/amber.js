const SkillTypes = require('../skill_types');
const ElementTypes = require('../element_types');

module.exports = {
    id: 'amber',
    name: 'Amber',
    rarity: '★★★★',
    element: ElementTypes.PYRO,
    url: 'https://genshin.gg/characters/Amber',
    thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/Amber.png',
    info: {

    },
    skills: [
        {
            name: 'Sharpshooter',
            type: SkillTypes.NORMAL_ATTACK,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Sharpshooter.png',
            rows: [
                {
                    name: 'Normal Attack',
                    value: 'Performs up to 5 consecutive shots with a bow.'
                },
                {
                    name: 'Charged Attack',
                    value: 'Perform a more precise Aimed Shot with increased DMG.\n' +
                        'While aiming, flames accumulates on the arrowhead. A fully charged flaming arrow will deal **Pyro** DMG.'
                },
                {
                    name: 'Plunging Attack',
                    value: 'Fires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.'
                },
            ],
            modifiers: [
                {
                    name: '1-Hit DMG',
                    value: '36.1%'
                },
                {
                    name: '2-Hit DMG',
                    value: '36.1%'
                },
                {
                    name: '3-Hit DMG',
                    value: '46.4%'
                },
                {
                    name: '4-Hit DMG',
                    value: '47.3%'
                },
                {
                    name: '5-Hit DMG',
                    value: '56.3%'
                },
                {
                    name: 'Aimed Shot',
                    value: '43.9%'
                },
                {
                    name: 'Fully-Charged Aimed Shot',
                    value: '124%'
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
            name: 'Explosive Puppet',
            type: SkillTypes.ELEMENTAL_SKILL,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Explosive_Puppet.png',
            rows: [
                {
                    name: 'Baron Bunny',
                    value: '• Continuously taunts the enemy, drawing their fire.\n' +
                        '• Baron Bunny\'s HP scales with Amber\'s Max HP.\n' +
                        '• When destroyed or when its timer expires, Baron Bunny explodes, dealing AoE **Pyro** DMG.\n'
                },
                {
                    name: 'Hold',
                    value: 'Adjusts the throwing direction of Baron Bunny.\n' +
                        'The longer the button is held, the further the throw.'
                },
            ],
            modifiers: [
                {
                    name: 'Inherited HP',
                    value: '41.4%'
                },
                {
                    name: 'Explosion DMG',
                    value: '123%'
                },
                {
                    name: 'CD',
                    value: '15s'
                }
            ]
        },
        {
            name: 'Fiery Rain',
            type: SkillTypes.ELEMENTAL_BURST,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Fiery_Rain.png',
            description: 'Fires of a shower of arrows, dealing continuous AoE **Pyro** DMG.',
            modifiers: [
                {
                    name: 'Fiery Rain DMG Per Wave',
                    value: '28.1%'
                },
                {
                    name: 'Total Fiery Rain DMG',
                    value: '505%'
                },
                {
                    name: 'Duration',
                    value: '2s'
                },
                {
                    name: 'CD',
                    value: '12s'
                },
                {
                    name: 'Energy Cost',
                    value: '40'
                },
            ]
        }
    ],
    passives: [
        {
            name: 'Every Arrow Finds Its Target',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Every_Arrow_Finds_Its_Target.png',
            ascension: 'Unlocked at Ascension 1',
            description: 'Increases the CRIT Rate of **Fiery Rain** by 10% and widens its AoE by 30%.'
        },
        {
            name: 'Precise Shot',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Precise_Shot.png',
            ascension: 'Unlocked at Ascension 4',
            description: 'Aimed Shot hits on weak spots increase Base ATK by 15% for 10s.'
        },
        {
            name: 'Every Arrow Finds Its Target',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Gliding_Champion.png',
            ascension: 'Unlocked Automatically',
            description: 'Decreases all party members\' gliding Stamina Consumption by 20%.\n' +
                'The greatest effect out of all Talents of the same type prevails.'
        }
    ],
    constellations: [
        {
            name: 'One Arrow to Rule Them All',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/One_Arrow_to_Rule_Them_All.png',
            level: 'Constellation Lv. 1',
            description: 'Fires 2 arrows per Aimed Shot. The second arrow deals 20% of the first arrow\'s DMG.'
        },
        {
            name: 'Bunny Triggered',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Bunny_Triggered.png',
            level: 'Constellation Lv. 2',
            description: 'Baron Bunny, new and improved! Hitting Baron Bunny\'s foot with a fully-charged Aimed Shot manually detonates it.\n' +
                'Explosion via manual detonation deals 200% additional DMG.'
        },
        {
            name: 'It Burns!',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/It_Burns!.png',
            level: 'Constellation Lv. 3',
            description: 'Increases the Level of **Fiery Rain** by 3.\n' +
                'Maximum upgrade level is 15.'
        },
        {
            name: 'It\'s Not Just Any Doll...',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/It\'s_Not_Just_Any_Doll....png',
            level: 'Constellation Lv. 4',
            description: 'Decreases **Explosive Puppet**\'s CD by 20%. Adds 1 additional charge.'
        },
        {
            name: 'It\'s Baron Bunny!',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/It\'s_Baron_Bunny!.png',
            level: 'Constellation Lv. 5',
            description: 'Increase the Level of **Explosive Puppet** by 3.\n' +
                'Maximum upgrade level is 15.'
        },
        {
            name: 'Wildfire',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Wildfire.png',
            level: 'Constellation Lv. 6',
            description: '**Fiery Rain** increases Amber\'s Movement SPD by 15% and Base ATK by 15% for 10s.'
        }
    ]
};
