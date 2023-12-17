export interface IStatistic {

    name: string;

    modifier: number;

}

export interface ILockedStatistic extends IStatistic {
    locked: boolean;
}
