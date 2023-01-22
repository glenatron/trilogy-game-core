import { IPlayer, Player } from './Player';
import { ILocation, Location } from './GM/Location';
import { INPC, NPC } from './GM/NPC';
import { IScene, Scene } from './GM/Scene';
import { ISession, Session } from './GM/Session';

export interface IGame {
    id: string;

    name: string;

    players: Array<IPlayer>;

    locations: Array<ILocation>;

    npcs: Array<INPC>;

    sessions: Array<ISession>;

}

export class Game {

    public name: string = '';

    public id: string = '';

    public players: Array<Player> = [];

    public locations: Array<Location> = [];

    public npcs: Array<NPC> = [];

    public sessions: Array<Session> = [];

    constructor(game: IGame | null = null) {
        if (!game || game.id == '') {
            this.id = crypto.randomUUID();
        } else {
            this.id = game.id;
            this.name = game.name;
            for (let play of game.players) {
                this.players.push(new Player(play));
            }
            for (let loc of game.locations) {
                this.locations.push(new Location(loc));
            }
            for (let npc of game.npcs) {
                this.npcs.push(new NPC(npc));
            }
            for (let session of game.sessions) {
                this.sessions.push(new Session(session));
            }
        }
    }

    public toStore(): IGame {
        let result = {
            id: this.id,
            name: this.name,
            players: new Array<IPlayer>,
            locations: new Array<ILocation>,
            npcs: new Array<INPC>,
            sessions: new Array<ISession>
        };
        for (let play of this.players) {
            result.players.push(play.toStore());
        }
        for (let loc of this.locations) {
            result.locations.push(loc.toStore());
        }
        for (let npc of this.npcs) {
            result.npcs.push(npc.toStore());
        }
        for (let session of this.sessions) {
            result.sessions.push(session.toStore());
        }
        return result;
    }



}
