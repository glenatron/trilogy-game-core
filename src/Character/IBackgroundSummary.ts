import { IMoveSummary } from './IMoveSummary';
import { Equipment } from './Equipment';

export interface IBackgroundSummary {

    name: string,

    description: string,

    move: IMoveSummary | null;

    startingEquipment: string;

    startingWealthModifier: number;
}
