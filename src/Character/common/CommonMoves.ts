import { IMoveSummary } from '../IMoveSummary';

export class CommonMoves {

    public static readonly moves: Array<IMoveSummary> = [
        {
            name: 'Investigate A Place',
            trigger: 'When you spend some time investigating a location, piece of equipment, or situation in detail.',
            stat: 'Mind',
            fullSuccess: 'You can ask three questions from the following list:',
            intermediate: 'You can ask one question from the following list:',
            failure: '',
            notes: 'The questions are: <ul><li>What is the greatest threat?</li><li>What is the best way in, out, or through? What is hidden here? What happened here recently? What advantage can I find here?</li><li> What should I be on the lookout for?</li><li> What evidence of [person or thing] can I find here?</li><ul>',
            source: 'common'
        },
        {
            name: 'Examine A Person',
            trigger: 'When you spend some time trying to figure someone out through direct interaction.',
            stat: 'Charm',
            fullSuccess: 'The GM will answer two questions from the following list and both answers will be truthful.',
            intermediate: 'The GM will answer two questions from the following list and one answer may be unreliable.',
            failure: '',
            notes: 'The questions are: <ul><li>Whose interests are they working in right now?</li><li>Do they believe what they are saying?</ li > <li>Do they mean harm to[person, place or thing] ? </li><li>What are they trying to hide?</li > <li>What would it take to persuade them to my side ? </li><li>What do they intend to do?</li > <li>What are they really feeling ? </li></ul > ',
            source: 'common'
        },

        {
            name: 'Common Knowledge',
            trigger: 'When you actively seek to recall everything you know about a specific topic.',
            stat: 'Mind',
            fullSuccess: 'The GM will tell you something detailed about the topic and relevant to your situation.',
            intermediate: 'The GM will give you information about the topic but it may be vague, hearsay, or it may be down to you to figure out how it is relevant to your current situation. ',

            failure: '',
            notes: '',
            source: 'common'
        },
        {
            name: 'Persuade',
            trigger: 'When you attempt to persuade, reason, manipulate or seduce an individual to your way of thinking',
            stat: 'Charm',
            fullSuccess: 'They will go along with your suggestion.',
            intermediate: 'They are unconvinced, mark Stress and they will require some immediate guarantee or proof of good faith.',

            failure: '',
            notes: 'They have been persuaded, not brainwashed- they will probably stop going along with you if they feel endangered or something betrays the reason you gave them. ',
            source: 'common'
        },
        {
            name: 'An Old Friend',
            trigger: 'When you need to find a contact who hasn\'t previously been introduced, explain who they are and how you know them',
            stat: 'Charm',
            fullSuccess: 'You find them.',
            intermediate: 'You find them but pick one: <ul><li>Last time you parted, you owed them a debt and they remember it</li><li>They are in some kind of trouble.</li><li>They carry some bad feelings about your previous relationship and are less welcoming than you expected.</li><li>They can no longer be trusted</li></ul>',

            failure: '',
            notes: '',
            source: 'common'
        },

        {
            name: 'Lend A Hand',
            trigger: 'When one of your companions asks for your help and you give it, before they roll (or after, spending an Action Point.)',
            stat: 'Heart,Strength,Subtlety,Charm,Mind',
            fullSuccess: 'Your companion gains advantage on their next roll.',
            intermediate: 'Your companion gains advantage on their next roll, but you will be caught up in any negative consequences of their action.',

            failure: '',
            notes: '',
            source: 'common'
        },
        {
            name: 'Face A Challenge',
            trigger: 'When a danger of some kind is rushing towards you and you must find a way to escape it or when a danger before you must be traversed',
            stat: 'Heart,Strength,Subtlety,Charm,Mind',
            fullSuccess: 'You meet this challenge successfully, although that does not necessarily mean you are out of danger',
            intermediate: 'You avoid the immediate danger, but your escape creates a new problem, cost, or tough choice ',

            failure: '',
            notes: '',
            source: 'common'
        },
        {
            name: 'Engage An Opponent With Force',
            trigger: 'When you engage an opponent in direct combat',
            stat: 'Strength,Subtlety',
            fullSuccess: 'Deal your harm or achieve another simple goal (sweeping their leg, knocking something out of their hand.)',
            intermediate: 'You exchange harm',

            failure: '',
            notes: '',
            source: 'common'
        },
        {
            name: 'Engage An Opponent At Range',
            trigger: 'When you engage an opponent with a ranged weapon or by throwing whatever is at hand',
            stat: 'Subtlety',
            fullSuccess: 'You inflict harm as established by the fiction and you can additionally choose one: <ul><li>Deal +1 harm.</li><li>Deal -1 harm but knock something out of their hand</li><li>Deal -1 harm but limit their movement in some way.</li></ul>',
            intermediate: 'You inflict harm as established by the fiction',

            failure: '',
            notes: '',
            source: 'common'
        },
        {
            name: 'Engage An Opponent With Wit',
            trigger: 'When you engage an opponent in debate or discussion',
            stat: 'Heart,Mind,Charm',
            fullSuccess: 'The person you are addressing or those watching your debate (your choice) are persuaded.',
            intermediate: 'The person you are addressing or those watching your debate (your choice) are persuaded but it was harder than you expected. Mark stress and choose one:<ul><li>You owe them a debt or favour</li><li>They remain uncertain of your case and suspicious</li><li>They know something that undermines your case</li></ul>',

            failure: '',
            notes: '',
            source: 'common'
        },
        {
            name: 'Receive Harm',
            trigger: 'When you receive Harm from an opponent or another source as established in the fiction',
            stat: 'Input',
            fullSuccess: 'The GM can choose one: <ul><li>You\'re out of action - physically trapped, unconscious, dazed, or ensorcelled.</li><li>It\'s worse than it seemed take an additional level of harm.</li><li>Choose two from the following sublist: <ul><li>You lose your footing< / li > <li>You lose your grip on whatever you\'re holding</li > <li>You miss something important < /li><li>An ally is placed at risk as well.</li > <li>The injury is frightening or distracting - mark Stress.< /li></ul > </li></ul > ',
            intermediate: 'The GM can choose one: <ul><li>You lose your footing</li><li>You lose your grip on whatever you\'re holding</li><li>You miss something important</li><li>An ally is placed at risk as well.</li><li>The injury is frightening or distracting - mark Stress.</li></ul>',
            failure: '',
            notes: '',
            source: 'common'
        }
        /*
                { name: '',
                  trigger: '',
                  stat: '',
                          fullSuccess: '',
                          intermediate: '',
        
                  failure: '',
                  notes: ''
                                source: 'common' }, */
    ];

}
