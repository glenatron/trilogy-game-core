import { IIdHaver } from "../Character/IIdHaver";

export interface IGMEntity extends IIdHaver {
    showPlayers: boolean;

    GMNotes: string;
}
