export enum RollType {
    Normal,
    Advantage,
    Disadvantage
}

export interface ICharacterRoll {
    rolledBy: string;

    statName: string;

    pool: DicePool;
}

export class DicePool {

    public result: Array<number> = [];

    public modifier: number = 0;

    constructor(public sides: number, public size: number, rType = RollType.Normal) {
        this.rollType = rType;
    }

    private _rollType = RollType.Normal;
    public get rollType() {
        return this._rollType;
    }

    public set rollType(newType: RollType) {
        if (newType != RollType.Normal && this.rollType == RollType.Normal) {
            this.addDice();
        } else if (this.rollType != RollType.Normal && newType == RollType.Normal) {
            this.removeDice();
        }
        this._rollType = newType;
    }

    public addDice(): void {
        this.size++;
    }

    public removeDice(): void {
        this.size--;
    }

    public roll(): void {
        this.result = [];
        for (let i = 0; i < this.size; i++) {
            this.result.push(Math.ceil(Math.random() * this.sides));
        }
    }

    public getModifierLiteral(): string {
        let result = '0';
        if (0 < this.modifier) {
            result = '+' + this.modifier;
        } else if (this.modifier < 0) {
            result = this.modifier.toString();
        }
        return result;
    }

    public best(count: number): number {
        return this.findSortedTotal(count, (a, b) => b - a);

    }

    public worst(count: number): number {
        return this.findSortedTotal(count, (a, b) => a - b);
    }

    public score(): number {
        let sc = 0;
        switch (this.rollType) {
            case RollType.Advantage: sc = this.best(this.size - 1);
                break;
            case RollType.Disadvantage: sc = this.worst(this.size - 1);
                break;
            default:
                sc = this.result.reduce((exist, current) => exist + current, 0);
                break;
        }
        return sc + this.modifier;
    }

    public analysis(): string {
        const analysis = Array.from(this.result);
        switch (this.rollType) {
            case RollType.Advantage: analysis.sort((a, b) => b - a);
                analysis.pop()
                break;
            case RollType.Disadvantage: analysis.sort((a, b) => a - b);
                analysis.pop();
                break;
        }
        let first = true;
        let result = analysis.reduce((res: string, current: number) => {
            let text = first ? res + current : res + ' + ' + current;
            first = false;
            return text;
        }, '');
        if (this.modifier !== 0) {
            result += ' ' + this.getModifierLiteral();
        }
        return result;
    }

    public reset() {
        this.result = [];
    }

    private findSortedTotal(count: number, sortFunction: (a: number, b: number) => number): number {
        let total = 0;
        if (0 < this.result.length) {
            let local = Array.from(this.result);
            local.sort(sortFunction);
            for (let i = 0; i < count; i++) {
                total += local[i];
            }
        }
        return total;
    }

}
