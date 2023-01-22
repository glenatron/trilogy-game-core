import { IStatistic } from "./IStatistic";
import { ICharacter } from "./ICharacter";

export class Character implements ICharacter {

    constructor(public name: string, public stats: Array<IStatistic>) {

    }



}
