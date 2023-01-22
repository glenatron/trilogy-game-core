import { IStatistic } from "./IStatistic";
import { ICharacter } from "./ICharacter";
import { EquipmentQuality, IArmour, IEquipment } from './IEquipment';
import { IBackgroundSummary } from './IBackgroundSummary';
import { IStoredCounter } from './Counter';
import { IHarm } from './HarmTrack';
import { IMoveSummary } from './IMoveSummary';
import { IStoredCharacterArc } from './CharacterArc';

export interface ICharacterArc {
    arcName: string,

    turningPointsHit: string[],

    advancedMoves: string[],

    customStatistics: Array<IStatistic> | null;

    customCounters: Array<IStoredCounter> | null;

    notes: string[];
}

export interface ITrilogyCharacterTemplate extends ICharacter {

    name: string;

    stats: Array<IStatistic>;

    xp: IStoredCounter;

    harm: Array<IHarm>;

    stress: IStoredCounter;

    wealth: IStoredCounter;

    background: IBackgroundSummary;

    complication: string;

    armour: IArmour;

    equipment: Array<IEquipment>;

    arcs: Array<IStoredCharacterArc>;

    customMoves: Array<IMoveSummary>;

}
