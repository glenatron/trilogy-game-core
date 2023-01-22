import { IArcSummary } from '../IArcSummary';
import { EquipmentQuality } from '../IEquipment';
import { Equipment } from '../Equipment';

export class TheChancer implements IArcSummary {

    public name = "The Chancer";

    public summary = "The Chancer is an opportunist with less of a moral compass than most people, or perhaps a moral compass that points in a somewhat different direction.";

    public arcNoteFields = [];

    public startingEquipment = [new Equipment("Forger's kit", EquipmentQuality.Serviceable, EquipmentQuality.Serviceable, '')];

    public positivePoleSuggestions = ['Friendly', 'Sociable', 'Inventive', 'Smart', 'Charming'];

    public negativePoleSuggestions = ['Untrustworthy', 'Dishonest', 'Corrupt', 'Devious', 'Manipulative', 'Amoral'];

    public initialTrigger = {
        positive: 'When your positive pole solves a problem for the group',

        negative: 'When your negative pole causes a problem for the group'
    };

    public turningPoints = [
        {
            title: 'When you come through for the group in a way that goes beyond what anyone expected',

            positive: true,

            triggers: {
                positive: 'When your negative pole leads you to be dishonest in a way that solves a problem for the group',

                negative: 'When your positive pole leads you to be dishonest in a way that causes problem for the group'
            }
        },
        {
            title: 'When you betray a friend or ally with disastrous consequences for them, to your own personal benefit,',

            positive: false,

            triggers: {
                positive: 'When your positive pole helps turn an enemy into an ally',

                negative: 'When your negative pole isolates you from your allies'
            }
        },

        {
            title: 'When you work with your allies to perform an extraordinary deception, you have reached a turning point',

            positive: true,

            triggers: {
                positive: 'When your positive pole risks giving away your deceit',

                negative: 'When your negative pole risks implicating an ally'
            }
        },
        {
            title: 'When the people who have fallen for your deceptions work together to capture you',

            positive: false,

            triggers: {

                positive: 'When your positive pole helps turn an enemy into an ally',

                negative: 'When your negative pole isolates you from your allies'
            }
        },
        {
            title: 'When you realise that you have been subject to a massive deception',

            positive: true,

            triggers: {
                positive: 'When your negative pole helps you to see through a lie',

                negative: 'When your positive pole causes you to treat someone with excessive scepticism'
            }
        }
    ];

    public conclusions = ['When the group needs you, and you come through for them in spite of the risk of doing so and the advantage of abandoning them.'];

    public startingMoves = [
        {
            name: 'An Opportunity Presents',
            trigger: 'When you need something that is hard to obtain and you ask a contact for it.',
            stat: 'Charm',
            fullSuccess: 'They are able to get the exact thing you need.',
            intermediate: "they are able to get something very close. In either case there is a string attached, choose one:<ul><li>You owe them a favour</li><li>Your acquisition is on loan and there will be serious problems if it isn't returned within a fixed period</li><li>Your acquisition has a reputation or will be recognised</li><li>Your acquisition is stolen and its owner is looking for it</li>",
            failure: '',
            notes: '',
            source: 'arc'
        },
        {
            name: 'Game Knows Game',
            trigger: 'When someone you talk to is operating some kind of grift, trick, or con.',
            stat: '',
            fullSuccess: '',
            intermediate: '',
            failure: '',
            notes: 'You can tell. You can spend an Action Point to know one of the following:<ul><li>Who is the mark?</li><li>What is the con?</li><li>What are they going to do next?</li>',
            source: 'arc'
        },
        {
            name: 'I Apologise For My Friend',
            trigger: 'When one of your allies fails a Charm roll in your presence, and you smooth things over.',
            stat: '',
            fullSuccess: '',
            intermediate: '',
            failure: '',
            notes: 'You can spend an action point to turn the failure into an intermediate success.',
            source: 'arc'
        }
    ];

    public advancedMoves = [
        {
            name: 'Not What It Looks Like',
            trigger: 'When you need to smuggle something (or someone) into a place it would not normally be permitted.',
            stat: 'Charm',
            fullSuccess: 'You get it in, no questions asked.',
            intermediate: "You get it in but it's close - mark 2 stress and whoever would normally prevent you from entry is suspicious.",
            failure: '',
            notes: '',
            source: 'arc'
        },
        {
            name: 'Finger Of Blame',
            trigger: 'When you need to frame someone for something that you or your associates are doing.',
            stat: '',
            fullSuccess: '',
            intermediate: '',
            failure: '',
            notes: 'You can spend an Action Point to do so very convincingly if you have something belonging to them or a prepared forgery or enough to raise suspicion otherwise.',
            source: 'arc'
        }, {
            name: 'A Reliable Source',
            trigger: 'When you need a rumour to spread, drop hints to your contacts.',
            stat: 'Charm',
            fullSuccess: 'Your rumour spreads through the community.',
            intermediate: 'Pick one:<ul><li>The rumour will take a long time to propagate</li><li>You were a little indiscreet - someone determined could trace the rumour back to you</li><li>The rumour needed a little push, which took a some money. Tell the GM who you had to pay off and they will tell you how much.</li></ul>',
            failure: '',
            notes: '',
            source: 'arc'
        }, {
            name: 'Just The Thing You Need',
            trigger: 'When you offer someone a convincing forgery or fake.',
            stat: 'Charm',
            fullSuccess: 'They are persuaded of its authenticity.',
            intermediate: "They are persuaded for now, but they're going to start asking questions in a while and they will remember who provided it.",
            failure: '',
            notes: '',
            source: 'arc'
        }, {
            name: 'The Grand Deceit',
            trigger: 'When you put a grand strategic deceit into play.',
            stat: 'Charm',
            fullSuccess: 'Those you aim to deceive are taken in completely and commit entirely to countering your apparent strategy.',
            intermediate: 'They are persuaded but cautious - they will take more time, investigate more thoroughly, or hold back some of their forces.',
            failure: '',
            notes: '',
            source: 'arc'
        }


    ];

    public customStatistics = null;

    public customCounters = null;


}
