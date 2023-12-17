export interface IStoredCounter {
    name: string;

    size: number;

    description: string;

    value: number;
}

export class Counter {

    public value: number = 0;


    constructor(
        public name: string,
        public size: number,
        currentValue: number,
        public description: string = ''
    ) {
        this.setValue(currentValue);
    }



    public setValue(newValue: number) {
        if (0 <= newValue && newValue <= this.size) {
            this.value = newValue;
        }
    }

    public getValue(): number {
        return this.value;
    }

    public increment(): void {
        this.setValue(this.value + 1);
    }

    public decrement(): void {
        this.setValue(this.value - 1);
    }

    public overwrite(newCounter: IStoredCounter) {
        this.name = newCounter.name;
        this.size = newCounter.size;
        this.description = newCounter.description;
        this.value = newCounter.value;
    }

    public toStore(): IStoredCounter {
        return {
            name: this.name,
            size: this.size,
            description: this.description,
            value: this.value
        };
    }

    public static fromStore(store: IStoredCounter): Counter {
        return new Counter(
            store.name,
            store.size,
            store.value,
            store.description
        );
    }

}
