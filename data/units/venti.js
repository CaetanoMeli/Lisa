const SkillTypes = require('../skill_types');
const ElementTypes = require('../element_types');

module.exports = {
    id: 'venti',
    name: 'Venti',
    rarity: '★★★★★',
    element: ElementTypes.ANEMO,
    url: 'https://genshin.gg/characters/Venti',
    thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/Venti.png',
    info: {

    },
    skills: [
        {
            name: 'Divine Marksmanship',
            type: SkillTypes.NORMAL_ATTACK,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Divine_Marksmanship.png',
            rows: [
                {
                    name: 'Normal Attack',
                    value: 'Performs up to 6 consecutive shots with a bow.'
                },
                {
                    name: 'Charged Attack',
                    value: 'Perform a more precise Aimed Shot with increased DMG.\n' +
                        'While aiming, favorable winds will accumulate on the arrowhead. A fully charged arrow will deal **Anemo** DMG.'
                },
                {
                    name: 'Plunging Attack',
                    value: 'Fires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.'
                },
            ],
            modifiers: [
                {
                    name: '1-Hit DMG',
                    value: '20.4% + 20.4%'
                },
                {
                    name: '2-Hit DMG',
                    value: '44.4%'
                },
                {
                    name: '3-Hit DMG',
                    value: '52.4%'
                },
                {
                    name: '4-Hit DMG',
                    value: '26.1% + 26.1%'
                },
                {
                    name: '5-Hit DMG',
                    value: '50.7%'
                },
                {
                    name: '6-Hit DMG',
                    value: '71%'
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
            name: 'Skyward Sonnet',
            type: SkillTypes.ELEMENTAL_SKILL,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Skyward_Sonnet.png',
            description: 'O wind upon which all hymns and songs fly, bear these earth-walkers up into the sky!',
            rows: [
                {
                    name: 'Press',
                    value: 'Summons a Wind Domain at the enemy\'s location, dealing AoE **Anemo** DMG and launching enemies into the air.'
                },
                {
                    name: 'Hold',
                    value: 'Summons an even larger Wind Domain with Venti as the epicenter, dealing AoE **Anemo** DMG and launching affected enemies into the air.\n' +
                        'After unleashing the Hold version of this ability, Venti rides the wind into the air.\n' +
                        '\n' +
                        'Enemies hit by **Skyward Sonnet** will fall to the ground slowly.'
                },
            ],
            modifiers: [
                {
                    name: 'Press DMG',
                    value: '276%'
                },
                {
                    name: 'Press CD',
                    value: '6s'
                },
                {
                    name: 'Hold DMG',
                    value: '380%'
                },
                {
                    name: 'CD (hold)',
                    value: '15s'
                }
            ]
        },
        {
            name: 'Wind\'s Grand Ode',
            type: SkillTypes.ELEMENTAL_BURST,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Wind\'s_Grand_Ode.png',
            description: 'Fires off an arrow made of countless coalesced winds, creating a huge Stormeye that sucks in objects and enemies along its path, dealing continuous **Anemo** DMG.',
            rows: [
                {
                    name: 'Elemental Absorption',
                    value: 'If the Stormeye comes into contact with **Hydro**/**Pyro**/**Cryo**/**Electro** elements, it will deal additional elemental DMG of that type.\n' +
                        'Elemental Absorption may only occur once per use.'
                }
            ],
            modifiers: [
                {
                    name: 'DoT',
                    value: '47%'
                },
                {
                    name: 'Additional Elemental DMG',
                    value: '23.5%'
                },
                {
                    name: 'Duration',
                    value: '8s'
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
