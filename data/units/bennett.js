const SkillTypes = require('../skill_types');
const ElementTypes = require('../element_types');

module.exports = {
    id: 'bennett',
    name: 'Bennett',
    rarity: '★★★★',
    element: ElementTypes.PYRO,
    url: 'https://genshin.gg/characters/Bennett',
    thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/Bennett.png',
    info: {

    },
    skills: [
        {
            name: 'Strike of Fortune',
            type: SkillTypes.NORMAL_ATTACK,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Strike_of_Fortune.png',
            rows: [
                {
                    name: 'Normal Attack',
                    value: 'Performs up to 5 rapid strikes.'
                },
                {
                    name: 'Charged Attack',
                    value: 'Consumes a certain amount of Stamina to unleash 2 rapid sword swings.'
                },
                {
                    name: 'Plunging Attack',
                    value: 'Plunges from mid-air to strike the ground below, damaging enemies along the path and dealing AoE DMG upon impact.'
                },
            ],
            modifiers: [
                {
                    name: '1-Hit DMG',
                    value: '44.5%'
                },
                {
                    name: '2-Hit DMG',
                    value: '42.7%'
                },
                {
                    name: '3-Hit DMG',
                    value: '54.6%'
                },
                {
                    name: '4-Hit DMG',
                    value: '59.7%'
                },
                {
                    name: '5-Hit DMG',
                    value: '71.9%'
                },
                {
                    name: 'Charged Attack DMG',
                    value: '55.9% + 60.7%'
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
            name: 'Passion Overload',
            type: SkillTypes.ELEMENTAL_SKILL,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Passion_Overload.png',
            description: 'Bennett puts all his fire and passion for adventuring into his sword. Results may very based on how fired up he is.',
            rows: [
                {
                    name: 'Press',
                    value: 'A single, swift flame strike that deals **Pyro** DMG.'
                },
                {
                    name: 'Hold',
                    value: 'Charges up, resulting in different effects when unleashed based on the Charge Level.\n' +
                        '• Level 1: Strikes twice, dealing **Pyro** DMG and launching enemies.\n' +
                        '• Level 2: Unleashes 3 consecutive attacks that deal impressive **Pyro** DMG, but the last attack triggers an explosion that launches both Bennet and the enemy.\n' +
                        'Bennett takes no damage from being launched.'
                },
            ],
            modifiers: [
                {
                    name: 'Press DMG',
                    value: '138%'
                },
                {
                    name: 'Charge Level 1 DMG',
                    value: '84% + 92%'
                },
                {
                    name: 'Charge Level 2 DMG',
                    value: '88% + 96%'
                },
                {
                    name: 'Explosion DMG',
                    value: '132%'
                },
                {
                    name: 'CD',
                    value: '5 / 7.5 / 10s'
                }
            ]
        },
        {
            name: 'Fantastic Voyage',
            type: SkillTypes.ELEMENTAL_BURST,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Fantastic_Voyage.png',
            description: 'Bennett leaps towards the enemy and performs a plunging attack, dealing *Pyro* DMG, creating an Inspiration Field.',
            rows: [
                {
                    name: 'Inspiration Field',
                    value: '• If the health of a character in the circle is equal to or falls below 70%, their health will continuously regenerate. Regeneration scales based on Bennett\'s Max HP.\n' +
                        '• If the health of a character in the circle is higher than 70%, they gain an ATK Bonus that is based on Bennett\'s Base ATK.\n' +
                        '• Applies the **Pyro** element to characters within the Field.'
                }
            ],
            modifiers: [
                {
                    name: 'Skill DMG',
                    value: '233%'
                },
                {
                    name: 'Continuous Regeneration Per Sec',
                    value: '6% max HP + 577'
                },
                {
                    name: 'ATK Bonus Ratio',
                    value: '56%'
                },
                {
                    name: 'Duration',
                    value: '12s'
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
