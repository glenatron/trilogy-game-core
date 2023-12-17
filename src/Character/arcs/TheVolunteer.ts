import { IArcSummary } from '../IArcSummary';
import { Counter } from '../Counter';

export class TheVolunteer implements IArcSummary {

    public name = "The Volunteer";

    public summary = "The Volunteer finds themselves in a new situation and, although they don't know a lot about it, they are very keen to get involved.";

    public arcNoteFields = [{ 'name': 'The Organisation', 'fields': ['About the Organisation'] }];

    public startingEquipment = [];

    public positivePoleSuggestions = ['Hopeful', 'Strong', 'Inquisitive', 'Enthusiastic', 'Learned'];

    public negativePoleSuggestions = ['Naive', 'Ignorant', 'Confused', 'Thoughtless', 'Zealous'];

    public initialTrigger = {
        positive: 'When your positive pole draws the admiration of your seniors in the organisation.',

        negative: 'When your negative pole makes people outside the organisation (or your peers within it) feel ill-disposed towards it.'
    };

    public turningPoints = [
        {
            title: 'When you are granted promotion within the organisation.',

            positive: true,

            triggers: {
                positive: 'When your positive pole draws the admiration of people outside the organisation, or your subordinates within it',

                negative: 'When your negative pole draws censure from fellow members of the organisation'
            }
        },
        {
            title: 'When  you learn something troubling about the organisation or the people who are running it',

            positive: false,

            triggers: {
                positive: 'When your negative pole puts you in alignment with the needs or desires of the organisation.',

                negative: 'When your positive pole puts you in conflict with the needs or desires of the organisation.'
            }
        },
        {
            title: 'When you do something that brings the organisation into disrepute with someone important',

            positive: false,

            triggers: {
                positive: "When your negative pole helps you recover the organisation's reputation.",

                negative: 'When your positive pole leads you to draw the organisation further into disrepute.'
            }
        },
        {
            title: 'When you reveal or thwart a plot to undermine or damage the organisation',

            positive: true,

            triggers: {
                positive: "When your positive pole helps you reinforce the organisation's stability.",

                negative: 'When your negative pole brings division within the organisation or between it and wider society.'
            }
        },
        {
            title: 'When someone powerful within the organisation makes a significant political move against you,',

            positive: false,

            triggers: {
                positive: 'When your negative pole helps you avoid a trap or danger.',

                negative: 'When your positive pole leads you to trust someone without good cause.'
            }
        },
    ];

    public conclusions = ['When you have elected to walk away from the organisation.', 'When you have elected to destroy the organisation', 'When you have elected to take over the organisation'];

    public startingMoves = [
        {
            name: 'Here To Help',
            trigger: "When you respond to a call for your organisation's help",
            stat: 'Heart',
            fullSuccess: 'Your assistance is exactly what they need - describe how you render the help they need and take +1 Kudos.',
            intermediate: "Your assistance is exactly what they need - describe how you render the help they need and take +1 Kudos but you miss something important in your enthusiasm, the GM may ask you what you have missed, or they may tell you, or you might not find out until later.  ",
            failure: '',
            notes: '',
            source: 'arc'
        },
        {
            name: 'Read The Handbook',
            trigger: "When a question arises regarding your organisation's processes, jurisdiction, or other procedural detail",
            stat: '',
            fullSuccess: '',
            intermediate: "",
            failure: '',
            notes: 'You know the correct answer very precisely - perhaps even down to the paragraph and subsection in the documents. You can take advantage on any roll to Engage An Opponent With Wit around this topic.',
            source: 'arc'
        }, {
            name: 'A Simple Misunderstanding',
            trigger: 'When someone feels they have been wronged by your organisation',
            stat: 'Heart',
            fullSuccess: "You are able to calm them down and talk them out of any extreme or excessive action.",
            intermediate: "You are able to calm them down and talk them out of any extreme or excessive action, but although they are mollified, you are not entirely persuaded by your own explanation.",
            failure: '',
            notes: '',
            source: 'arc'
        }, {
            name: 'Organisational Understanding',
            trigger: 'When you roll Examine A Person or Investigate A Place',
            stat: '',
            fullSuccess: '',
            intermediate: "",
            failure: '',
            notes: "You can add <i>How is this situation/person relevant to my organisation's interests?</i> to the list of questions.",
            source: 'arc'
        },
    ];

    public advancedMoves = [
        {
            name: 'A Friend In Need',
            trigger: 'When you urgently need help from someone in your organisation, or a close ally.',
            stat: '',
            fullSuccess: '',
            intermediate: "",
            failure: '',
            notes: 'Spend an Action Point to have them sho up, the GM may ask how they found you.',
            source: 'arc'
        },
        {
            name: 'Backchannels',
            trigger: 'When you need to get something from your organisation and you expend 2 Kudos.',
            stat: 'Heart',
            fullSuccess: 'You get the exact thing you need.',
            intermediate: "Pick one:<ul><li>You get something close but not the exact thing.</li><li>You get the exact thing, but it is damaged, compromised, or fake.</li><li>You get the exact thing, but your request has attracted someone's notice.</li></ul>",
            failure: '',
            notes: '',
            source: 'arc'
        }, {
            name: 'Calling Them In',
            trigger: 'When you really need to find someone who your organisation might have access to and you expend 4 Kudos.',
            stat: 'Heart',
            fullSuccess: 'The organisation is able to persuade them to meet with you or take them captive on your behalf',
            intermediate: "The organisation are able to find them, but either they couldn't make contact or the person you were seeking did not want to meet with you.",
            failure: '',
            notes: '',
            source: 'arc'
        }, {
            name: 'Part Of Something Greater',
            trigger: 'When you call on the organisation to mobilise on your behalf and you expend 3 Kudos.',
            stat: 'Heart',
            fullSuccess: 'On a 12+ they will mobilise everything they have to assist you. On a 10+ they will do what they can to provide the aid you need.',
            intermediate: "They will help but grudgingly and your request has drawn attention; the next time you roll this move, your result will be one step lower.",
            failure: '',
            notes: '',
            source: 'arc'
        },

    ];

    public customStatistics = null;

    public customCounters = [new Counter('Kudos', 5, 0, 'Your reputation within the organisation.')];



}

/*export class TheVolunteer implements IArcSummary {

    public name = "";

    public summary = "";

    public startingEquipment = [new Equipment("Forger's kit", EquipmentQuality.Serviceable, EquipmentQuality.Serviceable, '')];

    public positivePoleSuggestions = [];

    public negativePoleSuggestions = [];

    public initialTrigger = {
        positive: '',

        negative: ''
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
        {
            title: '',

            positive: true,

            triggers: {
                positive: '',

                negative: ''
            }
        },
        {
            title: '',

            positive: true,

            triggers: {
                positive: '',

                negative: ''
            }
        },
        {
            title: '',

            positive: true,

            triggers: {
                positive: '',

                negative: ''
            }
        },
        {
            title: '',

            positive: true,

            triggers: {
                positive: '',

                negative: ''
            }
        },

    ];

    public conclusions = [''];

    public startingMoves = [
        {
            name: '',
            trigger: '',
            stat: '',
            fullSuccess: '',
            intermediate: "",
            failure: '',
            notes: '',
            source: ''
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
            source: ''
        },


    ];

    public customStatistics = [];


    
}
*/
