export enum RollType {
    Normal,
    Advantage,
    Disadvantage
}

export class DicePool {

    public result: Array<number> = [];

    public modifier: number = 0;

    constructor(public sides: number, public size: number) {
    }



    public addDice() {
        this.size++;
    }

    public removeDice() {
        this.size--;
    }

    public roll() {
        this.result = [];
        for (let i = 0; i < this.size; i++) {
            this.result.push(Math.ceil(Math.random() * this.sides));
        }
    }

    public best(count: number): number {
        return this.findSortedTotal(count, (a, b) => b - a);

    }

    public worst(count: number) {
        return this.findSortedTotal(count, (a, b) => a - b);
    }

    public total() {
        return this.result.reduce((exist, current) => exist + current, 0);
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
