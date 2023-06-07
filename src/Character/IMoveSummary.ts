import { RollType } from './DicePool';

export interface IMoveSummary {

    name: string;

    trigger: string;

    // can be more than one- comma separated.
    stat: string;

    fullSuccess: string;

    intermediate: string;

    failure: string;

    notes: string;

    source: string;
}

export interface IMoveRoll {

    summary: IMoveSummary;

    selectedStat: string;

    rollType: RollType;

}
