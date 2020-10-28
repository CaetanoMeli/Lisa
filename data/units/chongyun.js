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
    passives: [
        {
            name: 'Steady Breathing',
            //FIXME thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Retribution.png',
            ascension: 'Unlocked at Ascension 1',
            description: 'Sword, Claymore, or Polearm-wielding characters within the field created by **Spirit Blade - Chonghua\'s Layered Frost** have their Normal Attack SPD increased by 8%.'
        },
        {
            name: 'Rimechaser Blade',
            //FIXME thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Leviathan\'s_Protection.png',
            ascension: 'Unlocked at Ascension 4',
            description: 'When the field created by **Spirit Blade - Chonghua\'s Layered Frost** disappears, another spirit will be summoned to strike nearby enemies, dealing 100% of Chonghua\'s Layered Frost\'s Skill DMG as AoE **Cryo** DMG. Enemies hit by this blade will have their **Cryo** RES decreased by 10% for 8s.'
        },
        {
            name: 'Gallant Journey',
            //FIXME thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Conqueror_of_Tides.png',
            ascension: 'Unlocked Automatically',
            description: 'When dispatched on an expedition in Liyue, time consumed is reduced by 25%.'
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
