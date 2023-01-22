import { IMoveSummary } from './IMoveSummary';
import { IStatistic } from './IStatistic';
import { Equipment } from './Equipment';
import { Counter } from './Counter';

export interface IXPTrigger {
    positive: string;

    negative: string;
}

export interface ITurningPoint {

    title: string;

    positive: boolean;

    triggers: IXPTrigger;
}

export interface IArcSummary {

    name: string;

    summary: string;

    arcNoteFields: string[];

    startingEquipment: Array<Equipment>;

    positivePoleSuggestions: string[];

    negativePoleSuggestions: string[];

    initialTrigger: IXPTrigger;

    turningPoints: Array<ITurningPoint>;

    conclusions: string[],

    startingMoves: Array<IMoveSummary>;

    advancedMoves: Array<IMoveSummary>;

    customStatistics: Array<IStatistic> | null;

    customCounters: Array<Counter> | null;
}
