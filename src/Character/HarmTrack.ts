import { Character } from './Character';
import { TrilogyCharacter, TrilogyStats } from './TrilogyCharacter';

export interface IHarm {
    order: number;

    level: number;

    value: string;

}

export class HarmTrack {

    public harmLevels = new Array<IHarm>();

    public character: TrilogyCharacter | null = null;

    constructor(existing: Array<IHarm> | null = null) {
        if (!existing) {
            this.harmLevels.push({ order: 1, level: 1, value: '' });
            this.harmLevels.push({ order: 2, level: 1, value: '' });
            this.harmLevels.push({ order: 3, level: 2, value: '' });
            this.harmLevels.push({ order: 4, level: 2, value: '' });
            this.harmLevels.push({ order: 5, level: 3, value: '' });
            this.harmLevels.push({ order: 6, level: 4, value: '' });
        } else {
            this.harmLevels = existing;
        }
    }

    addHarm(level: number, message: string, character: TrilogyCharacter | null): void {
        if (!character) {
            character = this.character;
        }
        let foundIndex = -1;
        while (0 < foundIndex && level < 5) {
            foundIndex = this.harmLevels.findIndex(x => x.level == level && x.value == '');
            if (foundIndex < 0) {
                level++;
            }
        }
        this.harmLevels[foundIndex].value = message;
        if (level == 3) {
            character!.addStatModifier(TrilogyStats.Strength, -1);
            character!.addStatModifier(TrilogyStats.Subtlety, -1);
        } else if (level == 4) {
            character!.movesEnabled = false;
        } else if (level == 5) {
            character!.alive = false;
        }
    }

    reduceHarm(harmIndex: number, newLevel: number, newText: string, character: TrilogyCharacter | null = null): void {
        this.clearHarm(harmIndex, character);
        this.addHarm(newLevel, newText, character);
    }

    clearHarm(harmIndex: number, character: TrilogyCharacter | null = null): void {
        if (!character) {
            character = this.character;
        }
        this.harmLevels[harmIndex].value = '';
        if (this.harmLevels[harmIndex].level == 4) {
            character!.movesEnabled = true;
        } else if (this.harmLevels[harmIndex].level == 3) {
            character!.removeStatModifier(TrilogyStats.Strength, -1);
            character!.removeStatModifier(TrilogyStats.Subtlety, -1);
        }

    }

    toStore(): Array<IHarm> {
        return this.harmLevels;
    }

    public static fromStore(stored: Array<IHarm>): HarmTrack {
        return new HarmTrack(stored);
    }
}
