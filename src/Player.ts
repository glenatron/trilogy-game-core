import { ITrilogyCharacterTemplate } from './Character/ITrilogyCharacterTemplate';
import { TrilogyCharacter } from './Character/TrilogyCharacter';

export interface IPlayer {
    id: string;

    name: string;

    characters: Array<ITrilogyCharacterTemplate>;

    activeCharacter: string;
}

export class Player {

    public id: string = '';

    public name: string = '';

    public inviteCode: string = '';

    public characters: Array<TrilogyCharacter> = [];

    public activeCharacter: string = '';

    constructor(player: IPlayer | null = null) {
        if (player) {
            this.id = player.id;
            this.name = player.name;
            this.activeCharacter = player.activeCharacter;
            for (let ch of player.characters) {
                this.characters.push(TrilogyCharacter.fromStore(ch));
            }
        } else {
            this.id = crypto.randomUUID();
        }
        this.inviteCode = crypto.randomUUID();
    }

    public toStore() {
        const result = {
            id: this.id,
            name: this.name,
            activeCharacter: this.activeCharacter,
            characters: new Array<ITrilogyCharacterTemplate>()
        };
        for (let ch of this.characters) {
            result.characters.push(ch.toStore());
        }
        return result;
    }
}
