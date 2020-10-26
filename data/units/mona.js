const SkillTypes = require('../skill_types');
const ElementTypes = require('../element_types');

module.exports = {
    id: 'mona',
    name: 'Mona',
    rarity: '★★★★★',
    element: ElementTypes.HYDRO,
    url: 'https://genshin.gg/characters/Mona',
    thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/Mona.png',
    info: {

    },
    skills: [
        {
            name: 'Ripple of Fate',
            type: SkillTypes.NORMAL_ATTACK,
            //FIXME thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Kaboom!.png',
            rows: [
                {
                    name: 'Normal Attack',
                    value: 'Performs up to 4 water splash attacks that deal **Hydro** DMG.'
                },
                {
                    name: 'Charged Attack',
                    value: 'Consumes a certain amount of Stamina and deals AoE **Hydro** DMG after a short casting time.'
                },
                {
                    name: 'Plunging Attack',
                    value: 'Gathering the might of Hydro, Mona plunges towards the ground from mid-air, damaging all enemies in her path. Deals AoE **Hydro** DMG upon impact with the ground.'
                },
            ],
            modifiers: [
                {
                    name: '1-Hit DMG',
                    value: '37.6%'
                },
                {
                    name: '2-Hit DMG',
                    value: '36%'
                },
                {
                    name: '3-Hit DMG',
                    value: '44.8%'
                },
                {
                    name: '4-Hit DMG',
                    value: '56.2%'
                },
                {
                    name: 'Charged Attack DMG',
                    value: '150%'
                },
                {
                    name: 'Charged Attack Stamina Cost',
                    value: '50'
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
            name: 'Reflection of Doom',
            type: SkillTypes.ELEMENTAL_SKILL,
            //FIXME thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Jumpy_Dumpty.png',
            description: 'Creates an illusory Phantom of fate from coalesced waterspouts.\n' +
                'The Phantom has the following special properties:\n' +
                '\n' +
                '• Continuously taunts nearby enemies, attracting their fire.\n' +
                '• Continuously deals **Hydro** DMG to nearby enemies.\n' +
                '• When its duration expires, the Phantom explodes, dealing AoE **Hydro** DMG.',
            rows: [
                {
                    name: 'Hold',
                    value: 'Utilizes water currents to move backwards swiftly before conjuring a Phantom.\n' +
                        'Only one Phantom created by Mirror Reflection of Doom can exist at any time.'
                }
            ],
            modifiers: [
                {
                    name: 'DoT',
                    value: '32%'
                },
                {
                    name: 'Explosion DMG',
                    value: '133%'
                },
                {
                    name: 'CD',
                    value: '12s'
                }
            ]
        },
        {
            name: 'Stellaris Phantasm',
            type: SkillTypes.ELEMENTAL_BURST,
            //FIXME thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Sparks_\'n\'_Splash.png',
            description: 'Mona summons the sparkling waves and creates a reflection of the starry sky, applying the Illusory Bubble status to opponents in a large AoE.',
            rows: [
                {
                    name: 'Illusory Bubble',
                    value: 'Traps opponents inside a pocket of destiny and also makes them Wet. Renders weaker opponents immobile. When an opponent affected by Illusory Bubble sustains DMG, the following effects are produced:\n' +
                        '\n' +
                        '• Applies an Omen to the opponent, which gives a DMG Bonus, also increasing the DMG of the attack that causes it.\n' +
                        '• Removes the Illusory Bubble, dealing **Hydro** Elemental DMG in the process. The DMG Bonus does not apply to the **Hydro** Elemental DMG dealt in this instance.'
                },
                {
                    name: 'Omen',
                    value: 'During its duration, increases DMG taken by enemies.'
                }
            ],
            modifiers: [
                {
                    name: 'Illusory Bubble Duration',
                    value: '8s'
                },
                {
                    name: 'Illusory Bubble Explosion DMG',
                    value: '442%'
                },
                {
                    name: 'DMG Bonus',
                    value: '42%'
                },
                {
                    name: 'Omen Duration',
                    value: '4s'
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
        },
        {
            name: 'Illusory Torrent',
            type: SkillTypes.RIGHT_CLICK,
            //FIXME thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Sparks_\'n\'_Splash.png',
            rows: [
                {
                    name: 'Alternate Spirit',
                    value: 'Mona cloaks herself within the water\'s flow, consuming Stamina to move rapidly.\n' +
                        'When under the effect of Illusory Torrent, Mona can move at high speed on water.\n' +
                        'Applies the Wet status to nearby enemies when she reappears.'
                }
            ],
            modifiers: [
                {
                    name: 'Activation Stamina Consumption',
                    value: '10'
                },
                {
                    name: 'Stamina Drain',
                    value: '15/s'
                },
            ]
        }
    ],
    constellations: [

    ]
};
