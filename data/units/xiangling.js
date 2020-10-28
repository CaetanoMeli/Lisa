const SkillTypes = require('../skill_types');
const ElementTypes = require('../element_types');

module.exports = {
    id: 'xiangling',
    name: 'Xiangling',
    rarity: '★★★★',
    element: ElementTypes.PYRO,
    url: 'https://genshin.gg/characters/Xiangling',
    thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/Xiangling.png',
    info: {

    },
    skills: [
        {
            name: 'Dough-Fu',
            type: SkillTypes.NORMAL_ATTACK,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Dough-Fu.png',
            rows: [
                {
                    name: 'Normal Attack',
                    value: 'Performs up to 5 consecutive spear strikes.'
                },
                {
                    name: 'Charged Attack',
                    value: 'Consumes a certain amount of Stamina to lunge forward, dealing damage to enemies along the way.'
                },
                {
                    name: 'Plunging Attack',
                    value: 'Plunges from mid-air to strike the ground below, damaging enemies along the path and dealing AoE DMG upon impact.'
                },
            ],
            modifiers: [
                {
                    name: '1-Hit DMG',
                    value: '42.1%'
                },
                {
                    name: '2-Hit DMG',
                    value: '42.1%'
                },
                {
                    name: '3-Hit DMG',
                    value: '26.1% + 26.1%'
                },
                {
                    name: '4-Hit DMG',
                    value: '14.1% x 4'
                },
                {
                    name: '5-Hit DMG',
                    value: '71%'
                },
                {
                    name: 'Charged Attack DMG',
                    value: '122%'
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
            name: 'Guoba Attack',
            type: SkillTypes.ELEMENTAL_SKILL,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Guoba_Attack.png',
            description: 'Summons Guoba the Panda. Guoba continuously breathes fire, dealing AoE **Pyro** DMG.',
            modifiers: [
                {
                    name: 'Flame DMG',
                    value: '111%'
                },
                {
                    name: 'CD',
                    value: '12s'
                }
            ]
        },
        {
            name: 'Pyronado',
            type: SkillTypes.ELEMENTAL_BURST,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Pyronado.png',
            description: 'Displaying her mastery over both fire and polearms, Xiangling sends a **Pyronado** whirling around her.\n' +
                'The **Pyronado** will move with your character for so long as the ability persists, dealing **Pyro** DMG to all enemies in its path.',
            modifiers: [
                {
                    name: '1-Hit DMG',
                    value: '72%'
                },
                {
                    name: '2-Hit DMG',
                    value: '88%'
                },
                {
                    name: '3-Hit DMG',
                    value: '110%'
                },
                {
                    name: 'Pyronado DMG',
                    value: '112%'
                },
                {
                    name: 'Duration',
                    value: '10s'
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
            name: 'Crossfire',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Crossfire.png',
            ascension: 'Unlocked at Ascension 1',
            description: 'Increases the flame range of Guoba by 20%.'
        },
        {
            name: 'Beware, It\'s Super Hot!',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Beware,_It\'s_Super_Hot!.png',
            ascension: 'Unlocked at Ascension 4',
            description: 'When **Guoba Attack**\'s effect ends, Guoba leaves a chili pepper on the spot where it disappeared. Picking up a chili pepper increases ATK by 10% for 10s.'
        },
        {
            name: 'Chef de Cuisine',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Chef_de_Cuisine.png',
            ascension: 'Unlocked Automatically',
            description: 'When Xiangling cooks an ATK-boosting dish perfectly, she has a 12% chance to receive double the product.'
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
