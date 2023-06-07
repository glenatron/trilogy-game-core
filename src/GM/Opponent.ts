import { INPC, NPC } from './NPC';
import { Counter, IStoredCounter } from '../Character/Counter';

export interface IOpponent extends INPC {


    armour: IStoredCounter;

    harmReduction: IStoredCounter;

    tier: number;

    harmLevel: number;

    tags: Array<string>;

    customMoves: Array<string>;

}

export class Opponent extends NPC {

    public armour: Counter;

    public harmReduction: Counter;

    public tier: number;

    public harmLevel: number;

    public tags: Array<string>;

    public customMoves: Array<string>;

    public constructor(detail: IOpponent) {
        super(detail);
        this.armour = Counter.fromStore(detail.armour);
        this.harmReduction = Counter.fromStore(detail.harmReduction);
        this.tier = detail.tier;
        this.harmLevel = detail.harmLevel;
        this.tags = detail.tags;
        this.customMoves = detail.customMoves;
    }

    public toStore(): IOpponent {
        return {
            id: this.id,
            name: this.name,
            tier: this.tier,
            pronouns: this.pronouns,
            appearance: this.appearance,
            description: this.description,
            need: this.need,
            npcRelationships: this.npcRelationships,
            GMNotes: this.GMNotes,
            showPlayers: this.showPlayers,
            resilience: this.resilience.toStore(),
            armour: this.armour.toStore(),
            harmReduction: this.harmReduction.toStore(),
            harmLevel: this.harmLevel,
            tags: this.tags,
            customMoves: this.customMoves
        };
    }

    public static fromStore(detail: IOpponent): Opponent {
        return new Opponent(detail);
    }

    public static create(): Opponent {
        return new Opponent({
            id: '',
            name: '',
            tier: 1,
            pronouns: 'they/them',
            appearance: '',
            description: '',
            need: '',
            npcRelationships: [],
            GMNotes: '',
            showPlayers: false,
            resilience: {
                name: 'Resilience',
                size: 5,
                value: 0,
                description: 'How much harm this Opponent can endure.'
            },
            armour: {
                name: 'Armour',
                size: 5,
                value: 0,
                description: 'How much armour this Opponent has.'
            },
            harmReduction: {
                name: 'Harm reduction',
                size: 3,
                value: 0,
                description: 'How much incoming harm is reduced on each hit.'
            },
            harmLevel: 1,
            tags: [],
            customMoves: []
        });
    }

    public static promote(npc: NPC): Opponent {


    }

}
