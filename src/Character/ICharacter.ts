import { IIdHaver } from "./IIdHaver";
import { IStatistic } from "./IStatistic";

export interface ICharacter extends IIdHaver {

    stats: Array<IStatistic>;

}
