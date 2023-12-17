import { IStoredCounter, Counter } from './Counter';

export interface IStoredTwoWayCounter extends IStoredCounter {
    id: string;

    leftPole: string;

    rightPole: string;

    thresholds: Array<number>;

}

export class TwoWayCounter extends Counter implements IStoredTwoWayCounter {

    public thresholds: Array<number> = [];

    constructor(
        name: string,
        size: number,
        currentValue: number,
        public leftPole: string,
        public rightPole: string,
        currentThresholds: Array<number>,
        description: string = '',
        public id: string = ''
    ) {
        super(name, size, currentValue, description);
        if (id.trim() == '') {
            this.id = crypto.randomUUID();
        }
        this.setThresholds(currentThresholds);
        this.setValue(currentValue);

    }

    public getLeftPoleRollValue(): number {
        return this.getPoleRollValue(true);
    }

    public getRightPoleRollValue(): number {
        return this.getPoleRollValue(false);
    }

    private getPoleRollValue(right: boolean): number {
        const seekValue = right ? this.value : (this.size + 1) - this.value;
        let count = -1;
        for (let i = 0; i < this.thresholds.length; i++) {
            if (this.thresholds[i] <= seekValue && count < 3) {
                count++;
            }
        }
        return count;
    }

    private setThresholds(setValue: Array<number>): void {
        setValue.sort((a, b) => b - a);
        if (setValue[0] < 0) {
            throw "Cannot set thresholds below zero";
        }
        if (this.size < setValue[setValue.length - 1]) {
            throw "Cannot set thresholds larger than the counter size";
        }
        this.thresholds = setValue;
    }

    public override  toStore(): IStoredTwoWayCounter {
        return {
            id: this.id,
            name: this.name,
            size: this.size,
            description: this.description,
            value: this.value,
            leftPole: this.leftPole,
            rightPole: this.rightPole,
            thresholds: this.thresholds
        };
    }

    public static override fromStore(store: IStoredTwoWayCounter): TwoWayCounter {
        return new TwoWayCounter(
            store.name,
            store.size,
            store.value,
            store.leftPole,
            store.rightPole,
            store.thresholds,
            store.description,
            store.id
        );
    }

}
