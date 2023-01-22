
import { IBackgroundSummary } from '../IBackgroundSummary';


export class Backgrounds {

    public static readonly backgrounds: Array<IBackgroundSummary> = [
        {
            name: 'Peasant',
            description: 'You grew up as part of a family scratching out a living through agriculture in a small village.',
            move: {
                name: 'Background Move: Peasant',
                trigger: 'When a piece of equipment is broken and in need of repairs, and you have sufficient time.',
                stat: '',
                fullSuccess: '',
                intermediate: '',
                failure: '',
                notes: 'You can create a rough and ready fix, Describe how the fix uses bits and bobs you happen to have available- it will not be pretty, but it will be functional. Equipment repaired this way will operate at basic efficiency until you can get it fixed properly',
                source: 'background'
            },
            startingWealthModifier: -1,
            startingEquipment: ''
        },
        {
            name: 'Street rat',
            description: 'You grew up on the streets. You had nothing, so you needed the city to provide and to a degree, it did. Not all of your friends survived, but some did, some travelled and made new lives for themselves. ',
            move: {
                name: 'Background Move: Street Rat',
                trigger: 'When you roll "Hello Old Friend" to find a new contact',
                stat: '',
                fullSuccess: '',
                intermediate: '',
                failure: '',
                notes: 'You can roll at +1 regardless of your charm.',
                source: 'background'
            },
            startingEquipment: '',
            startingWealthModifier: 0,
        },
        {
            name: 'Merchant',
            description: 'You were fortunate to be born into a family where money was not an immediate problem, although it was a constant source of conversation.',
            move: {
                name: 'Background Move: Merchant',
                trigger: 'When you need money urgently in a town or city.',
                stat: '',
                fullSuccess: '',
                intermediate: '',
                failure: '',
                notes: 'You can always find someone to offer you a loan. Your upbringing has, of course, taught you to be wary of the cost of sudden loans.',
                source: 'background'
            },
            startingWealthModifier: 1,
            startingEquipment: "Serviceable clothes"
        },
        {
            name: 'Noble',
            description: 'You were raised in luxury and life has treated you kindly.',
            move: null,
            startingWealthModifier: 1,
            startingEquipment: "Pick a piece of good quality equipment - a weapon, a set of armour, or a horse. Who gave you this extravagant gift?",
        },
        {
            name: 'Religious',
            description: 'Perhaps your family was deep in their faith, perhaps you were given up to a religious institution as a child; either way, you spent more of your childhood around temples, churches, or monasteries than anywhere else. What religion were you part of and how did its practices affect your childhood?',
            move: {
                name: 'Background Move: Religious ',
                trigger: 'When you need mundane supplies and have access to a temple of the denomination you were raised in.',
                stat: '',
                fullSuccess: '',
                intermediate: '',
                failure: '',
                notes: 'You can acquire them. Whether or not your upbringing gave you any insights into the nature of religion, it taught you a lot about the practicalities of life in a religious community.',
                source: 'background'
            },
            startingWealthModifier: 0,
            startingEquipment: '',
        },
        {
            name: 'Scholar',
            description: 'Your potential was recognized early and you were given the opportunity for an extraordinary education - what was the establishment that accepted you and why were they willing to take on children like you?',
            move: {
                name: 'Background Move: Scholar',
                trigger: 'When you need to find a former classmate.',
                stat: '',
                fullSuccess: '',
                intermediate: '',
                failure: '',
                notes: 'You can treat it as though you had rolled an intermediate success in a "Hello Old Friend" roll. Whether you exceeded yourself or failed miserably, you met people who went on to travel the realm.',
                source: 'background'
            },
            startingWealthModifier: 0,
            startingEquipment: '',
        },
        {
            name: 'Outsider',
            description: 'Most children get a fairly normal life among their peers, but not you - perhaps you were raised by a reclusive single parent, or raised entirely by magical constructs. Whatever it is, you missed out on a lot of what most children have in life, but you do have certain oddly-specific knowledge. ',
            move: {
                name: 'Background Move: Outsider',
                trigger: 'When you roll "Common Knowledge" on the specific realm of knowledge relevant to your upbringing.',
                stat: '',
                fullSuccess: '',
                intermediate: '',
                failure: '',
                notes: 'You can roll with advantage.',
                source: 'background'
            },
            startingWealthModifier: 0,
            startingEquipment: 'You start with an object closely related to your upbringing of serviceable quality but very strange - describe what it is.'
        },
        {
            name: 'Wanderer',
            description: 'You spent your younger days in travel - perhaps belonging to a nomadic people, perhaps your family were travelling performers or migrant workers. However it arose, your childhood revolved around wagons or tents and moving from camp to camp.',
            move: {
                name: 'Background Move: Wanderer',
                trigger: 'When you travel through familiar types of terrain.',
                stat: '',
                fullSuccess: '',
                intermediate: '',
                failure: '',
                notes: 'you are able to find yourself food and water without needing to carry supplies.',
                source: 'background'
            },
            startingWealthModifier: 0,
            startingEquipment: '',
        },
        {
            name: 'Uncanny',
            description: 'Your background was unusual, but in a way that few get to experience - perhaps you grew from an egg in the interstices between realms, perhaps you spent your young life as a messenger between petulant archons (although this could also count as a religious or scholarly background), or you were swapped for an old slice of bogwood as an infant and grew among the strange traditions of the fey courts. However it occurred, you may have left the realm where you began, but it has not left you.',
            move: {
                name: 'Background Move: Uncanny',
                trigger: 'When you need to hide yourself in your realm of origin',
                stat: 'Heart',
                fullSuccess: 'You find your way there exactly as you expected.',
                intermediate: 'You find your way through but to an unexpected or risky location.',
                failure: '',
                notes: '',
                source: 'background'
            },
            startingWealthModifier: 0,
            startingEquipment: '',
        },
        {
            name: 'Constructed',
            description: 'You were not born into this life, or if you were your birth was from a vat of alchemical oils or coalescing out of starlight into the heart of a potent magical rite. Perhaps you were awoken when paper with the sacred words was inserted into your clay mouth; perhaps you discovered yourself suddenly alive and conscious within the iron body that has patrolled the streets for so long. You are constructed by someone and for a reason.',
            move: null,
            startingWealthModifier: 0,
            startingEquipment: 'Pick a piece of equipment relevant to the purpose for which you were created. You have this built into your body, it cannot be taken from you, and although it can be damaged when you take harm it can be healed.',
        },
        /*
          {
             name: '',
             description: '',
             move:   { name: '',
                  trigger: '',
                  stat: '',
                  fullSuccess: '',
                  intermediate: '',
                  failure: '',
                  notes: '',
                  source: 'background' },
                  startingWealthModifier: 0,
                  startingEquipment: '',
},
         
         */
    ];

}
