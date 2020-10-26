const SkillTypes = require('../skill_types');
const ElementTypes = require('../element_types');

module.exports = {
    id: 'keqing',
    name: 'Keqing',
    rarity: '★★★★★',
    element: ElementTypes.ELECTRO,
    url: 'https://genshin.gg/characters/Keqing',
    thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/Keqing.png',
    info: {

    },
    skills: [
        {
            name: 'Yunlai Swordsmanship',
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
                    value: 'lunges from mid-air to strike the ground below, damaging enemeies along the path and dealing AoE DMG upon impact.'
                },
            ],
            modifiers: [
                {
                    name: '1-Hit DMG',
                    value: '41%'
                },
                {
                    name: '2-Hit DMG',
                    value: '41%'
                },
                {
                    name: '3-Hit DMG',
                    value: '54.4%'
                },
                {
                    name: '4-Hit DMG',
                    value: '31.5% + 34.4%'
                },
                {
                    name: '5-Hit DMG',
                    value: '67%'
                },
                {
                    name: 'Charged Attack DMG',
                    value: '76.8% + 86%'
                },
                {
                    name: 'Charged Attack Stamina Cost',
                    value: '25'
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
            name: 'Stellar Restoration',
            type: SkillTypes.ELEMENTAL_SKILL,
            //FIXME thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Gale_Blade.png',
            description: 'Hurls a Lightning Stiletto that annihilates her enemies like the swift thunder.\n' +
                'When the Stiletto hits its target, it deals **Electro** DMG to enemies in a small AoE, and places a Stiletto Mark on the spot hit.',
            rows: [
                {
                    name: 'Hold',
                    value: 'Hold to adjust the direction in which the Stiletto shall be thrown.\n' +
                        'Stilettos thrown by the Hold attack mode can be suspended in mid-air, allowing Keqing to jump to them when using Stellar Restoration a second time.'
                },
                {
                    name: 'Lightning Stiletto',
                    value: 'If Keqing uses Stellar Restoration again or uses a Charged Attack while its duration lasts, it will clear the Stiletto Mark and produce different effects:\n' +
                        '• If she uses Stellar Restoration again, she will blink to the location of the Mark and unleashed one slashing attack that deals AoE **Electro** DMG. When blinking to a Stiletto that was thrown from a Holding attack, Keqing can leap across obstructing terrain.\n' +
                        '• If Keqing uses a Charged Attack, she will ignite a series of thundering cuts at the Mark\'s location, dealing AoE **Electro** DMG.'
                }
            ],
            modifiers: [
                {
                    name: 'Lightning Stiletto DMG',
                    value: '50.4%'
                },
                {
                    name: 'Slashing DMG',
                    value: '168%'
                },
                {
                    name: 'Thunderclap Slash DMG',
                    value: '84% * 2'
                },
                {
                    name: 'CD',
                    value: '7.5s'
                }
            ]
        },
        {
            name: 'Starward Sword',
            type: SkillTypes.ELEMENTAL_BURST,
            //FIXME thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Dandelion_Breeze.png',
            description: 'Keqing unleashes the power of lightning, dealing **Electro** DMG in an AoE.\n' +
                '\n' +
                'She then blends into the shadow of her blade, striking a series of thunderclap-blows to nearby enemies simultaneous that deal multiple instance of **Electro** DMG. The final attack deals massive AoE **Electro** DMG.',
            modifiers: [
                {
                    name: 'Skill DMG',
                    value: '88%'
                },
                {
                    name: 'Consecutive Slash DMG',
                    value: '24% * 8'
                },
                {
                    name: 'Last Attack DMG',
                    value: '189%'
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
