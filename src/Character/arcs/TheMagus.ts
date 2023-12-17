import { IArcSummary } from '../IArcSummary';

export class TheMagus implements IArcSummary {

    public name = "The Magus";

    public summary = "The Magus is an arc about the power to do extraordinary things and the price that such activity exacts. The exact nature of the powers explored in this arc will depend very much on the worldbuilding for your game. A player picking this arc should talk with the GM about the nature and history of magic and establish the parameters for what their moves are capable of.";

    public arcNoteFields = ["Your School Of Magic", "What is the price of magic?"];

    public startingEquipment = [];

    public positivePoleSuggestions = ['Generous', 'Faithful', 'Insightful', 'Carefree', 'Enthusiastic'];

    public negativePoleSuggestions = ['Obsessive', 'Ambitious', 'Entitled', 'Careless', 'Overcautious'];

    public initialTrigger = {
        positive: 'When your positive pole encourages you to use your gift to help others.',

        negative: 'When your negative pole encourages you to use your gift to harm or deceive others.'
    };

    public turningPoints = [
        {
            title: '',

            positive: true,

            triggers: {
                positive: '',

                negative: ''
            }
        },
    ];

    public conclusions = ["When you "];

    public startingMoves = [
        {
            name: '',
            trigger: '',
            stat: '',
            fullSuccess: '',
            intermediate: "",
            failure: '',
            notes: '',
            source: 'arc'
        },

    ];

    public advancedMoves = [
        {
            name: '',
            trigger: '',
            stat: '',
            fullSuccess: '',
            intermediate: "",
            failure: '',
            notes: '',
            source: 'arc'
        },


    ];

    public customStatistics = [];

    public customCounters = [];
}
