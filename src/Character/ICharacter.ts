import { IStatistic } from "./IStatistic";

export interface ICharacter {

    id: string;

    name: string;

    stats: Array<IStatistic>;

}
