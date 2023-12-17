import { IArcSummary } from '../IArcSummary';

export class TheGifted implements IArcSummary {

    public name = "The Gifted";

    public summary = "The Gifted is an arc about a character who has been granted a magical gift or talent - perhaps they were born with it, perhaps they awoke one day with it, perhaps they made a deal with a power to gain it.";

    public arcNoteFields = [{ 'name': "The Other", 'fields': ["What does the Other grant you?", "What does the Other want?", "What kind of entity is the Other?", "What is the Other's name?"] }];

    public startingEquipment = [];

    public positivePoleSuggestions = ['Generous', 'Faithful', 'Insightful', 'Carefree', 'Enthusiastic'];

    public negativePoleSuggestions = ['Obsessive', 'Ambitious', 'Entitled', 'Careless', 'Overcautious'];

    public initialTrigger = {
        positive: 'When your positive pole encourages you to use your gift to help others.',

        negative: 'When your negative pole encourages you to use your gift to harm or deceive others.'
    };

    public turningPoints = [
        {
            title: 'When you have a revelation about the nature of your power, you have reached a turning point',

            positive: true,

            triggers: {
                positive: 'When your positive pole causes you to hold back instead of using your power.',

                negative: 'When your negative pole causes you to expend huge amounts of power.'
            }
        },
        {
            title: 'When the Other takes control of your power for its interests instead of yours, ',

            positive: false,

            triggers: {
                positive: "When your positive pole leads you to question the Other's motives",

                negative: "When your negative pole leads you to follow the Other's will unquestioningly."
            }
        },
        {
            title: 'When you direct your power with a new degree of control and skill.',

            positive: true,

            triggers: {
                positive: 'When your positive pole leads you to use your power with care and finesse',

                negative: 'When your negative pole leads you to use your power with no regard for the consequences'
            }
        },
        {
            title: "When you receive a dire warning, signal, or lesson from history regarding the possible reasons for the Other's interest in you",

            positive: false,

            triggers: {
                positive: 'When your negative pole leads you to be cautious of your power.',

                negative: 'When your positive pole pushes you to use your power incautiously.'
            }
        },
        {
            title: "When you find yourself isolated from or forbidden to use the Other's power.",

            positive: false,

            triggers: {
                positive: 'When your negative pole helps you on the way to recovering your power',

                negative: 'When your positive pole helps you acknowledge or accept your disempowerment'
            }
        }

    ];

    public conclusions = ["When you have understood the nature of the Other's gift and its power and chosen to relinquish it.", "When have confronted the Other and chosen to destroy them or cut them off from the world", "When you have understood the nature of the Other and the power it grants you, and chosen to align with it"];

    public startingMoves = [
        {
            name: 'Use Power',
            trigger: 'When you use your power to make a small change to the world.',
            stat: 'Heart',
            fullSuccess: 'Your power manifests exactly as you will it.',
            intermediate: "Your power manifests but not quite exactly as you wanted it to - perhaps it manifests more or less than you hoped, or it may create an attention-grabbing noise or light; the GM will tell you what happens.",
            failure: '',
            notes: '',
            source: 'arc'
        },
        {
            name: 'Othersight',
            trigger: 'When you roll Investigate A Place',
            stat: '',
            fullSuccess: '',
            intermediate: "",
            failure: '',
            notes: "You may also add <i>What does my power reveal about this place?</i> to the list of questions.",
            source: 'arc'
        }, {
            name: 'Othershield',
            trigger: 'When you would take harm and you instinctively turn to your power to reduce it.',
            stat: '',
            fullSuccess: 'Your power intercedes, reduce the incoming harm by 2.',
            intermediate: "your power intercedes but in a strange or inconsistent way. Reduce the incoming harm by 1, and describe what strange manifestation occurs.",
            failure: '',
            notes: '',
            source: 'arc'
        }, {
            name: 'Othergate',
            trigger: 'When you have answered the four foundational questions about the Other and you choose to open a doorway to where the Other exists.',
            stat: '',
            fullSuccess: "Pick three from the following list:<ul><li>You are able to bring someone else with you.</li><li>You will be able to control the place and time of your return.</li><li>The Other will not immediately be aware of your presence.</li><li>You will have control of the doorway.</li></ul>",
            intermediate: "Pick one from the following list:<ul><li>You are able to bring someone else with you.</li><li>You will be able to control the place and time of your return.</li><li>The Other will not immediately be aware of your presence.</li><li>You will have control of the doorway.</li></ul>",
            failure: '',
            notes: 'When the questions are answered, you always succeed, this move shows how much control you have.',
            source: 'arc'
        }
    ];

    public advancedMoves = [
        {
            name: 'Otherlash',
            trigger: 'When you roll Othershield.',
            stat: '',
            fullSuccess: '',
            intermediate: "",
            failure: '',
            notes: 'On a success your power reflects the harm you would have received back on who or whatever caused it.',
            source: ''
        },
        {
            name: 'Master Power',
            trigger: 'When you roll Use Power',
            stat: 'Heart',
            fullSuccess: '',
            intermediate: "",
            failure: '',
            notes: 'You are able to make an intermediate change in the world. You can spend an Action Point to make a minor change without a dice roll.',
            source: 'arc'
        }, {
            name: 'Otherwill',
            trigger: 'When you are in alignment with the intent of The Other and you need to persuade someone to your way of thinking.',
            stat: '',
            fullSuccess: '',
            intermediate: "",
            failure: '',
            notes: 'You can spend an Action Point to automatically succeed a Persuade roll.',
            source: 'arc'
        },
        {
            name: 'Unleash Power',
            trigger: 'When you roll Use Power.',
            stat: '',
            fullSuccess: '',
            intermediate: "",
            failure: '',
            notes: 'You may make a major change in the world. You can spend an Action Point to make an intermediate change with no roll and you may make a minor change with no roll for free.<br /><br /><i>Requires Master Power</i>',
            source: 'arc'
        },

    ];

    public customStatistics = [];

    public customCounters = [];
}
