import { IGMEntity } from './IGMEntity';
import { IGameEvent } from './IGameEvent';

export interface ActionPoint {
    characterId: string;

    points: number;

    expended: number;
}


export interface IScene extends IGMEntity {
    id: string;



    locationId: string;

    initiatingPlayerId: string;

    npcIds: Array<string>;

    characterIds: Array<string>;

    name: string;

    actionPoints: Array<ActionPoint>;

    events: Array<IGameEvent>;
}

export class Scene {

    public locationId = '';

    public name = '';

    public npcIds = new Array<string>();

    public characterIds = new Array<string>();

    public events = new Array<IGameEvent>();

    public initiatingPlayerId = '';

    public readonly id: string;


    public GMNotes = '';

    public showPlayers = true;

    public actionPoints: Array<ActionPoint>;

    public open = false;

    constructor(detail: IScene) {
        if (!detail.id || detail.id == '') {
            this.id = crypto.randomUUID();
        } else {
            this.id = detail.id;
        }
        this.name = detail.name;
        this.locationId = detail.locationId;
        this.npcIds = detail.npcIds;
        this.characterIds = detail.characterIds;
        this.events = detail.events;
        this.GMNotes = detail.GMNotes;
        this.showPlayers = detail.showPlayers;
        this.initiatingPlayerId = detail.initiatingPlayerId;
        this.actionPoints = detail.actionPoints;
    }

    public close() {
        this.open = false;
    }

    public toStore(): IScene {
        return {
            id: this.id,
            initiatingPlayerId: this.initiatingPlayerId,
            name: this.name,
            locationId: this.locationId,
            npcIds: this.npcIds,
            characterIds: this.characterIds,
            events: this.events,
            GMNotes: this.GMNotes,
            showPlayers: this.showPlayers,
            actionPoints: this.actionPoints
        }
    }


}
