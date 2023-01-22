import { IGMEntity } from './IGMEntity';
import { IGameEvent } from './IGameEvent';

export interface IScene extends IGMEntity {
    id: string;

    order: number;

    locationId: string;

    npcIds: Array<string>;

    playerIds: Array<string>;

    name: string;

    events: Array<IGameEvent>;
}

export class Scene {


    public locationId = '';

    public name = '';

    public npcIds = new Array<string>();

    public playerIds = new Array<string>();

    public events = new Array<IGameEvent>();

    public readonly id: string;

    public order = 1;

    public GMNotes = '';

    public showPlayers = true;

    constructor(detail: IScene) {
        if (!detail.id || detail.id == '') {
            this.id = crypto.randomUUID();
        } else {
            this.id = detail.id;
        }
        this.name = detail.name;
        this.locationId = detail.locationId;
        this.npcIds = detail.npcIds;
        this.playerIds = detail.playerIds;
        this.events = detail.events;
        this.GMNotes = detail.GMNotes;
        this.showPlayers = detail.showPlayers;
    }

    public toStore(): IScene {
        return {
            id: this.id,
            name: this.name,
            order: this.order,
            locationId: this.locationId,
            npcIds: this.npcIds,
            playerIds: this.playerIds,
            events: this.events,
            GMNotes: this.GMNotes,
            showPlayers: this.showPlayers
        }
    }


}
