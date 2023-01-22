import { IGMEntity } from './IGMEntity';

export interface ILocation extends IGMEntity {
    id: string;

    name: string;

    description: string;

    childLocations: Array<string>;
}

export class Location implements ILocation {

    public readonly id: string;

    public name: string = '';

    public description: string = '';

    public GMNotes: string = '';

    public showPlayers: boolean = false;

    public childLocations: Array<string> = [];

    constructor(detail: ILocation) {
        if (!detail.id || detail.id == '') {
            this.id = crypto.randomUUID();
        } else {
            this.id = detail.id;
        }
        this.name = detail.name;
        this.description = detail.description;
        this.GMNotes = detail.GMNotes;
        this.showPlayers = detail.showPlayers;
        this.childLocations = detail.childLocations || [];
    }

    public toStore(): ILocation {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            GMNotes: this.GMNotes,
            showPlayers: this.showPlayers,
            childLocations: this.childLocations
        }
    }
}
