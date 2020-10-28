const SkillTypes = require('../skill_types');
const ElementTypes = require('../element_types');

module.exports = {
    id: 'klee',
    name: 'Klee',
    rarity: '★★★★★',
    element: ElementTypes.PYRO,
    url: 'https://genshin.gg/characters/Klee',
    thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/Klee.png',
    info: {

    },
    skills: [
        {
            name: 'Kaboom!',
            type: SkillTypes.NORMAL_ATTACK,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Kaboom!.png',
            rows: [
                {
                    name: 'Normal Attack',
                    value: 'Throws things that go boom when they hit things! Perform up to 3 explosive attacks, dealing AoE **Pyro** DMG.'
                },
                {
                    name: 'Charged Attack',
                    value: 'Consumes a certain amount of Stamina and deals **Pyro** DMG to enemies after a short casting time.'
                },
                {
                    name: 'Plunging Attack',
                    value: 'Gathering the power of Pyro, Klee plunges towards the ground from mid-air, damaging all enemies in her path. Deals AoE **Pyro** DMG upon impact with the ground.'
                },
            ],
            modifiers: [
                {
                    name: '1-Hit DMG',
                    value: '72.2%'
                },
                {
                    name: '2-Hit DMG',
                    value: '62.4%'
                },
                {
                    name: '3-Hit DMG',
                    value: '89.9%'
                },
                {
                    name: 'Charged Attack DMG',
                    value: '157%'
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
            name: 'Jumpty Dumpty',
            type: SkillTypes.ELEMENTAL_SKILL,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Jumpy_Dumpty.png',
            description: '**Jumpy Dumpty** is tons of boom-bang-fun!\n' +
                'When thrown, **Jumpy Dumpty** bounces thrice, igniting and dealing AoE **Pyro** DMG with every bounce.\n' +
                '\n' +
                'On the third bounce, the bomb splits into many mines.\n' +
                'The mines will explode upon contact with enemies, or after a short period of time, dealing AoE **Pyro** DMG.\n' +
                '\n' +
                'Starts with 2 charges.',
            modifiers: [
                {
                    name: 'Jumpty Dumpty DMG',
                    value: '95%'
                },
                {
                    name: 'Mine DMG',
                    value: '33%'
                },
                {
                    name: 'Mine Duration',
                    value: '15s'
                },
                {
                    name: 'CD',
                    value: '20s'
                }
            ]
        },
        {
            name: 'Sparks \'n\' Splash',
            type: SkillTypes.ELEMENTAL_BURST,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Sparks_\'n\'_Splash.png',
            description: 'Klee\'s Blazing Delight! For the duration of this ability, continuously summons **Sparks \'n\' Splash** to attack nearby enemies, dealing AoE **Pyro** DMG.',
            modifiers: [
                {
                    name: 'Sparks \'n\' Splash DMG',
                    value: '42.6%'
                },
                {
                    name: 'Duration',
                    value: '10s'
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
    passives: [
        {
            name: 'Pounding Surprise',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Pounding_Surprise.png',
            ascension: 'Unlocked at Ascension 1',
            description: 'When **Jumpy Dumpty** and Normal Attacks deal DMG, Klee has a 50% chance to obtain an Explosive Spark. This Explosive Spark is consumed by the next Charged Attack, which costs no Stamina and deals 50% increased DMG.'
        },
        {
            name: 'Sparkling Burst',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Sparkling_Burst.png',
            ascension: 'Unlocked at Ascension 4',
            description: 'When a Charged Attack results in a CRIT, all party members gain 2 Elemental Energy.'
        },
        {
            name: 'All Of My Treasures!',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/All_Of_My_Treasures!.png',
            ascension: 'Unlocked Automatically',
            description: 'Displays the location of nearby resources unique to Mondstadt on the mini-map.'
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
