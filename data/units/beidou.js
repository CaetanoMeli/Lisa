const SkillTypes = require('../skill_types');
const ElementTypes = require('../element_types');

module.exports = {
    id: 'beidou',
    name: 'Beidou',
    rarity: '★★★★',
    element: ElementTypes.ELECTRO.img,
    url: 'https://genshin.gg/characters/Beidou',
    thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/Beidou.png',
    color: ElementTypes.ELECTRO.color,
    info: {

    },
    skills: [
        {
            name: 'Oceanborne',
            type: SkillTypes.NORMAL_ATTACK,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Oceanborne.png',
            rows: [
                {
                    name: 'Normal Attack',
                    value: 'Performs up to 5 successive strikes.'
                },
                {
                    name: 'Charged Attack',
                    value: 'Drains Stamina over time to perform continuous slashes.\n' +
                        'At end of the sequence, perform a more powerful slash.'
                },
                {
                    name: 'Plunging Attack',
                    value: 'Plunges from mid-air to strike the ground, damaging enemies along the path and dealing AoE DMG upon impact.'
                },
            ],
            modifiers: [
                {
                    name: '1-Hit DMG',
                    value: '71.1%'
                },
                {
                    name: '2-Hit DMG',
                    value: '70.9%'
                },
                {
                    name: '3-Hit DMG',
                    value: '88.3%'
                },
                {
                    name: '4-Hit DMG',
                    value: '86.5%'
                },
                {
                    name: '5-Hit DMG',
                    value: '112%'
                },
                {
                    name: 'Charged Attack Spinning DMG',
                    value: '56.2%'
                },
                {
                    name: 'Charged Attack Final DMG',
                    value: '102%'
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
                    value: '76.6%'
                },
                {
                    name: 'Low / High Plunge DMG',
                    value: '149% / 186%'
                }
            ]
        },
        {
            name: 'Tidecaller',
            type: SkillTypes.ELEMENTAL_SKILL,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Tidecaller.png',
            description: 'Nothing to worry about. Should anyone raise a hand against her or her men, she will avenge it ten-fold with sword and thunder.',
            rows: [
                {
                    name: 'Press',
                    value: 'Accumulating the power of lightning, Beidou swings her blade forward fiercely, dealing **Electro** DMG.'
                },
                {
                    name: 'Hold',
                    value: 'Lifts her weapon up as a shield. Max DMG absorbed scales off Beidou\'s Max HP.\n' +
                        'Attacks using the energy stored within the greatsword upon release or once this ability\'s duration expires, dealing **Electro** DMG. DMG dealt scales with the number of times Beidou is attacked in the skill\'s duration. The greatest DMG Bonus will be attained once this effect is triggered twice.\n' +
                        'The shield possesses the following properties:\n' +
                        '• Has 250% **Electro** DMG Absorption Efficiency.\n' +
                        '• Applies the **Electro** element to Beidou upon activation.'
                },
            ],
            modifiers: [
                {
                    name: 'Shield DMG Absoption',
                    value: '14.4% Max HP + 1386'
                },
                {
                    name: 'Base DMG',
                    value: '122%'
                },
                {
                    name: 'DMG Bonus on Hit Taken',
                    value: '160%'
                },
                {
                    name: 'CD',
                    value: '7.5s'
                }
            ]
        },
        {
            name: 'Stormbreaker',
            type: SkillTypes.ELEMENTAL_BURST,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Stormbreaker.png',
            description: 'Recalling her slaying of the great beast Haishan. Beidou calls upon that monstrous strength and the lightning to create a Thunderbeast\'s Targe around herself.',
            rows: [
                {
                    name: 'Thunderbeast\'s Target',
                    value: '• When Normal and Charged Attacks hit, they create a lightning discharge that can jump between enemies, dealing **Electro** DMG.\n' +
                        '• Increases the character\'s resistance to interruption, and decreases DMG taken.'
                },
            ],
            modifiers: [
                {
                    name: 'Skill DMG',
                    value: '122%'
                },
                {
                    name: 'Lightning DMG',
                    value: '96%'
                },
                {
                    name: 'DMG Reduction',
                    value: '20%'
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
                }
            ]
        }
    ],
    constellations: [

    ]
};
