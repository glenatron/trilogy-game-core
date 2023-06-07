import { IStatistic } from "./IStatistic";
import { IMoveSummary } from "./IMoveSummary";
import { Character } from "./Character";
import { DicePool, RollType } from "./DicePool";

export interface IMoveResult {
    name: string,

    total: number,

    diceResult: string,

    text: string,

    notes: string
}

export class Move {

    statNames: Array<string>;

    result: IMoveResult | null = null;

    constructor(public character: Character, public summary: IMoveSummary) {
        this.statNames = summary.stat.split(',');
    }

    public roll(pool: DicePool, rollType: RollType = RollType.Normal, statName: string = ''): DicePool {
        if (this.statNames.length == 1 || statName.trim().length == 0) {
            statName = this.statNames[0];
        }
        let stat = this.character.stats.find(x => x.name.toLowerCase() == statName.toLowerCase());
        if (!stat) {
            throw ("Cannot roll stat " + statName + " - it is not found on " + this.character.stats);
        } else {
            pool.modifier = stat.modifier;
        }
        pool.rollType = rollType;
        pool.roll();
        this.setResult(pool.score());
        return pool;
    }

    private setResult(value: number): void {
        let diceResult = 'Failure';
        let text = this.summary.failure;
        if (10 <= value) {
            diceResult = 'Success';
            text = this.summary.fullSuccess;
        } else if (7 <= value) {
            diceResult = 'Mixed success';
            text = this.summary.intermediate;
        }
        this.result = {
            name: this.summary.name,
            total: value,
            diceResult: diceResult,
            text: text,
            notes: this.summary.notes
        };
    }



}
