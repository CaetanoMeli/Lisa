const SkillTypes = require('../skill_types');

module.exports = {
    id: 'amber',
    name: 'Amber',
    rarity: '★★★★',
    url: 'https://genshin.gg/characters/Amber',
    thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/Amber.png',
    color: '#ff0000',
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
                    value: 'Performs up to 5 consecutive shots with a bow'
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
    constellations: [

    ]
};
