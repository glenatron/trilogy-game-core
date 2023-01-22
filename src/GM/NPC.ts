import { IGMEntity } from './IGMEntity';
import { IHarm, HarmTrack } from '../Character/HarmTrack';

export interface INPC extends IGMEntity {
    id: string;

    name: string;

    pronouns: string;

    appearance: string;

    demeanour: string;

    description: string;

    need: string;

    npcRelationships: Array<string>;

    harm: Array<IHarm>;

}

export class NPC {
    public readonly id: string;

    public name: string = '';

    public pronouns: string = 'they/them';

    public appearance: string = '';

    public demeanour: string = '';

    public description: string = '';

    public need: string = '';

    public npcRelationships: Array<string> = [];

    public GMNotes: string = '';

    public showPlayers: boolean = false;

    public readonly harm: HarmTrack;

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
        if (detail.harm && 0 < detail.harm.length) {
            this.harm = new HarmTrack(detail.harm);
        } else {
            this.harm = new HarmTrack([
                { level: 1, value: '' },
                { level: 1, value: '' },
                { level: 2, value: '' },
                { level: 3, value: '' }
            ]);
        }
    }

    public toStore(): INPC {
        return {
            id: this.id,
            name: this.name,
            pronouns: this.pronouns,
            appearance: this.appearance,
            demeanour: this.demeanour,
            description: this.description,
            need: this.need,
            npcRelationships: this.npcRelationships,
            GMNotes: this.GMNotes,
            showPlayers: this.showPlayers,
            harm: this.harm.harmLevels

        };
    }
}
