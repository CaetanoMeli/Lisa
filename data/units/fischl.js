const SkillTypes = require('../skill_types');
const ElementTypes = require('../element_types');

module.exports = {
    id: 'fischl',
    name: 'Fischl',
    rarity: '★★★★',
    element: ElementTypes.ELECTRO,
    url: 'https://genshin.gg/characters/Fischl',
    thumbnail: 'https://rerollcdn.com/GENSHIN/Characters/Fischl.png',
    info: {

    },
    skills: [
        {
            name: 'Bolts of Downfall',
            type: SkillTypes.NORMAL_ATTACK,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Bolts_of_Downfall.png',
            rows: [
                {
                    name: 'Normal Attack',
                    value: 'Performs up to 5 consecutive shots with a bow.'
                },
                {
                    name: 'Charged Attack',
                    value: 'Perform a more precise Aimed Shot with increased DMG.\n' +
                        'While aiming, the dark lightning spirits of Immernachtreich shall heed the call of their Prinzessin and indwell the enchanted arrowhead. When fully indwelt, the Rachsuchtig Blitz shall deal immense **Electro** DMG.'
                },
                {
                    name: 'Plunging Attack',
                    value: 'Fires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.'
                },
            ],
            modifiers: [
                {
                    name: '1-Hit DMG',
                    value: '44.1%'
                },
                {
                    name: '2-Hit DMG',
                    value: '46.8%'
                },
                {
                    name: '3-Hit DMG',
                    value: '58.1%'
                },
                {
                    name: '4-Hit DMG',
                    value: '57.7%'
                },
                {
                    name: '5-Hit DMG',
                    value: '72.1%'
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
            name: 'Nightrider',
            type: SkillTypes.ELEMENTAL_SKILL,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Nightrider.png',
            description: 'Summons Oz, the night raven forged of darkness and lightning descends upon the land, dealing **Electro** DMG in a small AoE.\n' +
                'For the ability\'s duration, Oz will continuously attack nearby enemies with Freikugel.\n' +
                '\n' +
                'Hold to adjust the location Oz will be summoned to.\n' +
                'Press again any time during the ability\'s duration to once again summon him to Fischl\'s side.',
            modifiers: [
                {
                    name: 'Oz\'ATK DMG',
                    value: '88.8%'
                },
                {
                    name: 'Summoning DMG',
                    value: '115%'
                },
                {
                    name: 'Oz\'s Duration',
                    value: '10s'
                },
                {
                    name: 'CD',
                    value: '25s'
                }
            ]
        },
        {
            name: 'Midnight Phantasmagoria',
            type: SkillTypes.ELEMENTAL_BURST,
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Midnight_Phantasmagoria.png',
            description: 'Summons Oz to spread his twin swings of twilight and defend Fischl.\n' +
                'Has the following properties during the ability\'s duration:\n' +
                '• Fischl takes on Oz\'s form, greatly increasing her Movement Speed.\n' +
                '• Strikes nearby enemies with lightning, dealing Electro DMG to enemies she comes into contact with. Each enemy can only be struck once.\n' +
                '• Once this ability\'s effects end, Oz will remain on the battlefield and attack his Prinzessin\'s foes. If Oz is already on the field, then this will reset the duration of his presence.',
            modifiers: [
                {
                    name: 'Falling Thunder DMG',
                    value: '208%'
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
            name: 'Stellar Predator',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Stellar_Predator.png',
            ascension: 'Unlocked at Ascension 1',
            description: 'When Fischl hits Oz with a fully-charged Aimed Shot, Oz brings down Thundering Retribution, dealing AoE **Electro** DMG equal to 152.7% of the arrow\'s DMG.'
        },
        {
            name: 'Lightning Smite',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Lightning_Smite.png',
            ascension: 'Unlocked at Ascension 4',
            description: 'If a character triggers an Electro-related Elemental Reaction when Oz is on the field, the enemy shall be stricken with Thundering Retribution, dealing **Electro** DMG equal to 80% of Fischl\'s ATK.'
        },
        {
            name: 'Mein Hausgarten',
            thumbnail: 'https://rerollcdn.com/GENSHIN/Skills/NEW/Mein_Hausgarten.png',
            ascension: 'Unlocked Automatically',
            description: 'When dispatched on an expedition in Mondstadt, time consumed is reduced by 25%.'
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
