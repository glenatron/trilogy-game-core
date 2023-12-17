import { IGMEntity } from './IGMEntity';
import { IIdHaver } from "../Character/IIdHaver";
import { Counter, IStoredCounter } from '../Character/Counter';

export interface INPC extends IGMEntity {

    pronouns: string;

    appearance: string;

    description: string;

    need: string;

    npcRelationships: Array<string>;

    resilience: IStoredCounter;

}

export class NPC implements IIdHaver {
    public readonly id: string;

    public name: string = '';

    public pronouns: string = 'they/them';

    public appearance: string = '';

    public description: string = '';

    public need: string = '';

    public npcRelationships: Array<string> = [];

    public GMNotes: string = '';

    public showPlayers: boolean = false;

    public readonly resilience: Counter;


    constructor(detail: INPC) {
        if (!detail.id || detail.id == '') {
            this.id = crypto.randomUUID();
        } else {
            this.id = detail.id;
        }
        this.name = detail.name;
        this.pronouns = detail.pronouns;
        this.appearance = detail.appearance;
        this.npcRelationships = detail.npcRelationships || [];
        this.GMNotes = detail.GMNotes;
        this.showPlayers = detail.showPlayers;
        this.need = detail.need;
        this.description = detail.description;
        if (detail.resilience && 0 < detail.resilience.size) {
            this.resilience = Counter.fromStore(detail.resilience);
        } else {
            this.resilience = new Counter('Resilience', 4, 0, 'How much stress/harm this NPC can survive.');
        }
    }

    public toStore(): INPC {
        return {
            id: this.id,
            name: this.name,
            pronouns: this.pronouns,
            appearance: this.appearance,
            description: this.description,
            need: this.need,
            npcRelationships: this.npcRelationships,
            GMNotes: this.GMNotes,
            showPlayers: this.showPlayers,
            resilience: this.resilience.toStore()

        };
    }

    public static fromStore(detail: INPC): NPC {
        return new NPC(detail);
    }

    public static create(): NPC {
        return new NPC({
            id: '',
            name: '',
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
            }
        })
    }
}
