const SkillTypes = require('../skill_types');
const ElementTypes = require('../element_types');

module.exports = {
    id: 'chongyun',
    name: 'Chongyun',
    rarity: '★★★★',
    element: ElementTypes.CRYO,
    url: 'https://genshin.gg/characters/Chongyun',
    thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/Chongyun.png',
    info: {

    },
    skills: [
        {
            name: 'Demonbane',
            type: SkillTypes.NORMAL_ATTACK,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Demonbane.png',
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
                    value: '70%'
                },
                {
                    name: '2-Hit DMG',
                    value: '63.1%'
                },
                {
                    name: '3-Hit DMG',
                    value: '80.3%'
                },
                {
                    name: '4-Hit DMG',
                    value: '101%'
                },
                {
                    name: 'Charged Attack Spinning DMG',
                    value: '56.3%'
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
                    value: '74.6%'
                },
                {
                    name: 'Low / High Plunge DMG',
                    value: '149% / 186%'
                }
            ]
        },
        {
            name: 'Spirit Blade - Chonghua\'s Layered Frost',
            type: SkillTypes.ELEMENTAL_SKILL,
            //FIXME looks awful thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Spirit_Blade_-_Chonghua\'s_Layered_Frost.png',
            description: 'Chongyun strikes the ground with his greatsword, causing a **Cryo** explosion in a circular AoE in front of him that deals **Cryo** DMG.\n' +
                'After a short delay, the cold air created by the **Cryo** explosion will coalesce into a Chonghua Frost Field, within which all DMG done through Normal and Charged Attacks by Sword, Greatsword and Polearm-wielding characters will be converted to **Cryo** DMG.',
            modifiers: [
                {
                    name: 'Skill DMG',
                    value: '172%'
                },
                {
                    name: 'Delay',
                    value: '2s'
                },
                {
                    name: 'Duration',
                    value: '10s'
                },
                {
                    name: 'CD',
                    value: '15s'
                }
            ]
        },
        {
            name: 'Spirit Blade - Cloud-parting Star',
            type: SkillTypes.ELEMENTAL_BURST,
            //FIXME looks awful thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Spirit_Blade_-_Cloud-parting_Star.png',
            description: 'Performing the secret hand seals, Chongyun summons 3 giant spirit blades in mid-air that fall to the earth one by one after a short delay, exploding as they hit the ground.\n' +
                'When the spirit blades explode, they will deal AoE **Cryo** DMG and launch enemies.',
            modifiers: [
                {
                    name: 'Skill DMG',
                    value: '142%'
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
