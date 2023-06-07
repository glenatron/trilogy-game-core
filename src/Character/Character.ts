import { IStatistic } from "./IStatistic";
import { ICharacter } from "./ICharacter";

export class Character implements ICharacter {

    constructor(public id: string, public name: string, public stats: Array<IStatistic>) {
        if (id.trim() == '') {
            this.id = crypto.randomUUID();
        }
    }



}
