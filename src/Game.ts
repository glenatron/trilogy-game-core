import { IPlayer, Player } from './Player';
import { Character } from './Character/Character';
import { ITrilogyCharacterTemplate } from './Character/ITrilogyCharacterTemplate';
import { TrilogyCharacter } from './Character/TrilogyCharacter';
import { ILocation, Location } from './GM/Location';
import { INPC, NPC } from './GM/NPC';
import { IScene, Scene } from './GM/Scene';
import { ISession, Session } from './GM/Session';
import { IChat, MessageType } from './Chat';

export interface IGame {
    id: string;

    name: string;

    players: Array<IPlayer>;

    locations: Array<ILocation>;

    characters: Array<ITrilogyCharacterTemplate>;

    npcs: Array<INPC>;

    sessions: Array<ISession>;

    chat: Array<IChat>;

}

export class Game {

    public name: string = '';

    public id: string = '';

    public players: Array<Player> = [];

    public locations: Array<Location> = [];

    public characters: Array<TrilogyCharacter> = [];

    public npcs: Array<NPC> = [];

    public sessions: Array<Session> = [];

    public chat: Array<IChat> = [];

    constructor(game: IGame | null = null) {
        if (!game || game.id == '') {
            this.id = crypto.randomUUID();
        } else {

            this.id = game.id;
        }
        if (game) {
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
            for (let character of game.characters) {
                this.characters.push(TrilogyCharacter.fromStore(character));
            }
        }
    }

    public findCharacter(id: string): TrilogyCharacter | null {
        let count = 0;
        while (count < this.players.length) {
            let char = this.players[count].characters.find(x => x.id == id);
            if (char != null) {
                return char;
            }
            count++;
        }
        return null;
    }

    public toStore(): IGame {
        let result = {
            id: this.id,
            name: this.name,
            players: new Array<IPlayer>,
            locations: new Array<ILocation>,
            npcs: new Array<INPC>,
            sessions: new Array<ISession>,
            characters: new Array<ITrilogyCharacterTemplate>,
            chat: this.filterChat()
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
        for (let char of this.characters) {
            result.characters.push(char.toStore());
        }
        return result;
    }

    private filterChat(): Array<IChat> {
        let newChat = this.chat.reduce((arr: Array<IChat>, current: IChat) => {
            if (current.messageType == MessageType.Chat) {
                arr.push(current);
            }
            return arr;
        }, []);
        if (0 < newChat.length) {
            newChat.reverse();
            newChat = newChat.slice(0, 30);
            newChat.reverse();
        }
        return newChat;
    }



}
