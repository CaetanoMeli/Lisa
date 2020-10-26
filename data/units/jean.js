const SkillTypes = require('../skill_types');
const ElementTypes = require('../element_types');

module.exports = {
    id: 'jean',
    name: 'Jean',
    rarity: '★★★★★',
    element: ElementTypes.ANEMO,
    url: 'https://genshin.gg/characters/Jean',
    thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/Jean.png',
    info: {

    },
    skills: [
        {
            name: 'Favonius Bladework',
            type: SkillTypes.NORMAL_ATTACK,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Favonius_Bladework.png',
            rows: [
                {
                    name: 'Normal Attack',
                    value: 'Performs up to 5 consecutive strikes.'
                },
                {
                    name: 'Charged Attack',
                    value: 'Consumes a certain amount of Stamina to launch an enemy using the power of wind.\n' +
                        'Launched enemies will slowly fall to the ground.'
                },
                {
                    name: 'Plunging Attack',
                    value: 'Plunges from mid-air to strike the ground below, damaging enemies along the path and dealing AoE DMG upon impact.'
                },
            ],
            modifiers: [
                {
                    name: '1-Hit DMG',
                    value: '48.3%'
                },
                {
                    name: '2-Hit DMG',
                    value: '45.6%'
                },
                {
                    name: '3-Hit DMG',
                    value: '60.3%'
                },
                {
                    name: '4-Hit DMG',
                    value: '65.9%'
                },
                {
                    name: '5-Hit DMG',
                    value: '79.2%'
                },
                {
                    name: 'Charged Attack DMG',
                    value: '162%'
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
            name: 'Gale Blade',
            type: SkillTypes.ELEMENTAL_SKILL,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Gale_Blade.png',
            description: 'Focusing the might of the formless wind around her blade, Jean releases a miniature storm, launching enemies in the direction she aims at, dealing massive **Anemo** DMG.',
            rows: [
                {
                    name: 'Hold',
                    value: 'At the cost of continued Stamina consumption, Jean can command the whirlwind to pull surrounding enemies towards her front.\n' +
                        'Direction can be adjusted.\n' +
                        'Character is immobile during skill duration.'
                }
            ],
            modifiers: [
                {
                    name: 'Skill DMG',
                    value: '292%'
                },
                {
                    name: 'Stamina Consumption',
                    value: '20/s'
                },
                {
                    name: 'Max Duration',
                    value: '5s'
                },
                {
                    name: 'CD',
                    value: '6s'
                }
            ]
        },
        {
            name: 'Dandelion Breeze',
            type: SkillTypes.ELEMENTAL_BURST,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Dandelion_Breeze.png',
            description: 'Calling upon the wind\'s protection, Jean creates a swirling Dandelion Field, launching surrounding enemies and causing **Anemo** DMG.\n' +
                'At the same time, she instantly regenerates a large amount of HP for nearby allied units and all party members. HP restored scale off Jean\'s ATK.',
            rows: [
                {
                    name: 'Dandelion Field',
                    value: '• Continuously regenerates HP for one ally and imbues them with the **Anemo** attribute.\n' +
                        '• Deals **Anemo** DMG to enemies entering or exiting the field.'
                }
            ],
            modifiers: [
                {
                    name: 'Elemental Burst DMG',
                    value: '425%'
                },
                {
                    name: 'Field Entering / Exiting DMG',
                    value: '78.4%'
                },
                {
                    name: 'Field Activation Healing',
                    value: '251% atk + 1540'
                },
                {
                    name: 'Continuous Regeneration',
                    value: '25.12% atk + 154'
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
