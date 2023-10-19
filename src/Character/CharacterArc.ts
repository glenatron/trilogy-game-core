import { IArcSummary, ITurningPoint, IXPTrigger } from './IArcSummary';
import { IMoveSummary } from './IMoveSummary';
import { ArcList } from './arcs/ArcList';

export interface IStoredCharacterArc {

    arcName: string;

    noteValues: string[];

    turningPoints: number[];

    customCounterValues: number[];

    customStatValues: number[];

    advancedMoves: number[];

    closed: boolean

}


export class CharacterArc {

    public summary: IArcSummary;

    public noteValues: string[] = [];

    public turningPoints: number[] = [];

    public advancedMoves: number[] = [];

    public customCounterValues: number[] = [];

    public customStatValues: number[] = [];

    public closed: boolean = false;

    constructor(arcName: string) {

        this.summary = ArcList.getArc(arcName);
        if (!this.summary) {
            throw "Could not find an arc for " + arcName;
        }
        for (let note of this.summary.arcNoteFields) {
            this.noteValues.push('');
        }
        for (let bs of this.summary.startingMoves) {
            bs.source = "arc move";
        }
        for (let av of this.summary.advancedMoves) {
            av.source = "advanced move";
        }
        if (this.summary.customCounters) {
            for (let counter of this.summary.customCounters) {
                this.customCounterValues.push(counter.getValue());
            }
        }
        if (this.summary.customStatistics) {
            for (let stat of this.summary.customStatistics) {
                this.customStatValues.push(stat.modifier);
            }
        }

    }

    public lastTurningPoint(): ITurningPoint | null {
        let result: ITurningPoint | null = null;
        if (this.turningPoints.length == 0) {
            this.turningPoints.push(0);
        }
        result = this.summary.turningPoints[this.turningPoints[this.turningPoints.length - 1]];

        return result;
    }

    public getXPTriggers(): IXPTrigger {
        let last = this.lastTurningPoint();
        if (last) {
            return last.triggers;
        } else {
            return this.summary.initialTrigger;
        }
    }

    public getCharacterTurningPoints(): Array<ITurningPoint> {
        let result = new Array<ITurningPoint>();
        for (let i = 0; i < this.summary.turningPoints.length; i++) {
            result.push(this.summary.turningPoints[this.turningPoints[i]]);
        }
        return result;
    }

    public getAvailableTurningPoints(): Array<ITurningPoint> {
        let result = new Array<ITurningPoint>();
        for (let i = 0; i < this.summary.turningPoints.length; i++) {
            if (this.turningPoints.indexOf(i) < 0) {
                result.push(this.summary.turningPoints[i]);
            }
        }
        return result;
    }

    public addTurningPoint(index: number): void {
        if (this.turningPoints.indexOf(index) < 0) {
            this.turningPoints.push(index);
        } else {
            throw "Turning Point " + this.summary.turningPoints[index].title + " has already been hit!";
        }
    }

    public getCharacterAdvancedMoves(): Array<IMoveSummary> {
        let result = new Array<IMoveSummary>();
        for (let i = 0; i < this.advancedMoves.length; i++) {
            result.push(this.summary.advancedMoves[this.advancedMoves[i]]);
        }
        return result;
    }

    public getAvailableAdvancedMoves(): Array<IMoveSummary> {
        let result = new Array<IMoveSummary>();
        if (0 < this.advancedMoves.length) {
            for (let i = 0; i < this.summary.advancedMoves.length; i++) {
                if (this.advancedMoves.indexOf(i) < 0) {
                    result.push(this.summary.advancedMoves[i]);
                }
            }
        } else {
            result = this.summary.advancedMoves;
        }
        return result;
    }

    public addAdvancedMove(name: string): void {
        let id = this.summary.advancedMoves.findIndex(x => x.name == name);
        if (id < 0) {
            throw "Cannot find a move called " + name;
        }
        this.advancedMoves.push(id);
    }

    public toStore(): IStoredCharacterArc {
        return {

            arcName: this.summary.name,

            noteValues: this.noteValues,

            turningPoints: this.turningPoints,

            customCounterValues: this.customCounterValues,

            customStatValues: this.customStatValues,

            advancedMoves: this.advancedMoves,

            closed: this.closed

        };
    }

    public static fromStore(stored: IStoredCharacterArc): CharacterArc {
        let arc = new CharacterArc(stored.arcName);
        arc.noteValues = stored.noteValues;
        arc.turningPoints = stored.turningPoints;
        arc.customCounterValues = stored.customCounterValues;
        arc.customStatValues = stored.customStatValues;
        arc.advancedMoves = stored.advancedMoves;
        arc.closed = stored.closed;

        return arc;
    }



}
