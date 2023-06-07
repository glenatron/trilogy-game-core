import { ITrilogyCharacterTemplate } from './Character/ITrilogyCharacterTemplate';
import { TrilogyCharacter } from './Character/TrilogyCharacter';

export interface IPlayer {
    id: string;

    name: string;

    isGM: boolean;

    characters: Array<ITrilogyCharacterTemplate>;

    activeCharacterId: string;
}

export class Player {

    public id: string = '';

    public name: string = '';

    public isGM: boolean = false;

    public inviteCode: string = '';

    public characters: Array<TrilogyCharacter> = [];

    public activeCharacterId: string = '';

    constructor(player: IPlayer | null = null) {
        if (player) {
            this.id = player.id == '' ? this.id = crypto.randomUUID() : player.id;
            this.name = player.name;
            this.activeCharacterId = player.activeCharacterId;
            this.isGM = player.isGM;
            if (!this.isGM) {
                for (let ch of player.characters) {
                    this.characters.push(TrilogyCharacter.fromStore(ch));
                }
            }
        } else {
            this.id = crypto.randomUUID();
        }
        this.inviteCode = crypto.randomUUID();
    }

    public getActiveCharacter(): TrilogyCharacter | null {
        if (this.activeCharacterId != null) {
            let char = this.characters.find(x => x.id == this.activeCharacterId);
            if (char) {
                return char;
            }
        }
        return null;
    }

    public toStore() {
        const result = {
            id: this.id,
            name: this.name,
            activeCharacterId: this.activeCharacterId,
            characters: new Array<ITrilogyCharacterTemplate>(),
            isGM: this.isGM
        };
        for (let ch of this.characters) {
            result.characters.push(ch.toStore());
        }
        return result;
    }
}
