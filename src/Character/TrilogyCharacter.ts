
import { IStatistic, ILockedStatistic } from './IStatistic';
import { Character } from './Character';
import { HarmTrack } from './HarmTrack';
import { IStoredCounter, Counter } from './Counter';
import { IStoredTwoWayCounter, TwoWayCounter } from './TwoWayCounter';
import { IMoveSummary } from './IMoveSummary';
import { IBackgroundSummary } from './IBackgroundSummary';
import { Move } from './Move';
import { Equipment } from './Equipment';
import { Armour } from './Armour';
import { CommonMoves } from './common/CommonMoves';
import { ArcList } from './arcs/ArcList';
import { ITrilogyCharacterTemplate } from './ITrilogyCharacterTemplate';
import { CharacterArc, IStoredCharacterArc } from './CharacterArc';

export enum TrilogyStats {
    Heart = "Heart",
    Mind = "Mind",
    Strength = "Strength",
    Subtlety = "Subtlety",
    Charm = "Charm"
}

export class TrilogyCharacter extends Character {

    public movesEnabled = true;

    public alive = true;

    public statModifiers = new Array<IStatistic>();

    public moves = new Array<Move>();

    public customCounters = new Array<Counter>();

    public twoWayCounters = new Array<TwoWayCounter>();

    public arcs = new Array<CharacterArc>();

    constructor(
        id: string,
        name: string,
        stats: Array<IStatistic>,
        public tier: number,
        public xp: Counter,
        public harm: HarmTrack,
        public stress: Counter,
        public wealth: Counter,
        public background: IBackgroundSummary,
        public complication: string,
        public armour: Armour | null,
        public equipment: Array<Equipment>,
        arcNames: Array<string>,
        customMoves: Array<IMoveSummary>,
        public pronouns: string,
        public look: string,
        public notes: string,
        public gmNotes: string,
        public customStats: Array<IStatistic>,
        storedCounters: Array<IStoredCounter>,
        storedTwoWayCounters: Array<IStoredTwoWayCounter>

    ) {
        super(id, name, stats);
        this.addCommonMoves();
        for (let name of arcNames) {
            this.addArcByName(name);
        }
        this.harm.character = this;
        this.customCounters = storedCounters.map(x => Counter.fromStore(x));
        this.twoWayCounters = storedTwoWayCounters.map(x => TwoWayCounter.fromStore(x));
    }

    public addStatModifier(statName: TrilogyStats, value: number) {
        if (value != 0) {
            let sIndex = this.statModifiers.findIndex(x => x.name == statName);
            if (0 <= sIndex) {
                this.statModifiers.push({ name: statName, modifier: value });
            } else {
                this.statModifiers[sIndex].modifier += value;
                if (this.statModifiers[sIndex].modifier == 0) {
                    this.statModifiers = this.statModifiers.splice(sIndex, 1);
                }
            }
        }
    }

    public removeStatModifier(statName: TrilogyStats, value: number) {
        let sIndex = this.statModifiers.findIndex(x => x.name == statName);
        if (0 <= sIndex) {
            if (this.statModifiers[sIndex].modifier == value) {
                this.statModifiers.splice(sIndex, 1);
            } else {
                this.statModifiers[sIndex].modifier -= value;
            }
        }
    }

    public addArcByName(arcname: string) {
        let arc = new CharacterArc(arcname);
        let characterArc = {
            arcName: arcname,
            turningPoints: [],
            customCounterValues: arc.summary.customCounters ? arc.summary.customCounters.map(x => 0) : [],
            customStatValues: arc.summary.customStatistics ? arc.summary.customStatistics.map(x => 0) : [],
            noteValues: arc.summary.arcNoteFields.map(x => ''),
            advancedMoves: [],
            closed: false
        };
        this.addArc(characterArc, arc);
    }


    public addArc(arcSummary: IStoredCharacterArc, arc: CharacterArc | null = null): void {
        if (!arc) {
            arc = CharacterArc.fromStore(arcSummary);
        }

        for (let mv of arc.summary.startingMoves) {
            this.moves.push(new Move(this, mv));
        }
        for (let moveIdx of arcSummary.advancedMoves) {
            let adv = arc.summary.advancedMoves[moveIdx];
            this.moves.push(new Move(this, adv));
        }
        this.arcs.push(arc);
    }

    public addCommonMoves() {
        for (let mv of CommonMoves.moves) {
            this.moves.push(new Move(this, mv));
        }
    }

    public addMove(mv: IMoveSummary) {
        this.moves.push(new Move(this, mv));
    }

    public currentArc(): CharacterArc {
        return this.arcs[this.arcs.length - 1];
    }

    public addTwoWayCounter(counter: IStoredTwoWayCounter): void {
        var editIdx = this.twoWayCounters.findIndex(x => x.id == counter.id);
        var idx = this.twoWayCounters.findIndex(x => x.name == counter.name || x.leftPole == counter.leftPole || x.rightPole == counter.rightPole);
        // Another counter matches one field here, which is against the rules.
        if (0 <= idx && idx != editIdx) {
            throw "Cannot add a counter with the same name " + counter.name + " or pole names " + counter.leftPole + " and " + counter.rightPole;
        }
        let twoWay = TwoWayCounter.fromStore(counter);
        if (0 <= editIdx) {
            this.twoWayCounters[editIdx] = twoWay;
            this.removeTwoWayCounterStat(twoWay.leftPole);
            this.removeTwoWayCounterStat(twoWay.rightPole);
        } else {
            this.twoWayCounters.push(twoWay);
        }
        var left = {
            "name": twoWay.leftPole,
            "modifier": twoWay.getLeftPoleRollValue(),
            "locked": true
        };
        this.customStats.push(left);
        let right: ILockedStatistic = {
            "name": twoWay.rightPole,
            "modifier": twoWay.getRightPoleRollValue(),
            "locked": true
        }
        this.customStats.push(right);
    }

    public removeTwoWayCounter(id: string): void {
        var idx = this.twoWayCounters.findIndex(x => x.id == id);
        if (0 <= idx) {
            const counter = this.twoWayCounters[idx];
            this.removeTwoWayCounterStat(counter.leftPole);
            this.removeTwoWayCounterStat(counter.rightPole);
            this.twoWayCounters = this.twoWayCounters.filter(x => x.id != id);
        }
    }

    public removeTwoWayCounterStat(name: string): void {
        var counter = this.twoWayCounters.find(x => x.name == name) as TwoWayCounter;
        if (counter != null) {
            this.customStats = this.customStats.filter(x => x.name != counter.leftPole && x.name != counter.rightPole);
        }
    }

    public filterTwoWayCounterStats(): Array<IStatistic> {
        return this.customStats.filter(x => 0 < this.twoWayCounters.findIndex(y => y.leftPole == x.name || y.rightPole == x.name));
    }

    public updateTwoWayCounter(counterId: string, value: number) {
        const idx = this.twoWayCounters.findIndex(x => x.id == counterId);
        const leftIdx = this.customStats.findIndex(x => x.name == this.twoWayCounters[idx].leftPole);
        const rightIdx = this.customStats.findIndex(x => x.name == this.twoWayCounters[idx].rightPole);

        this.twoWayCounters[idx].value = value;
        this.customStats[leftIdx].modifier = this.twoWayCounters[idx].getLeftPoleRollValue();
        this.customStats[rightIdx].modifier = this.twoWayCounters[idx].getRightPoleRollValue();
    }

    public toStore(): ITrilogyCharacterTemplate {
        this.twoWayCounters.map(x => this.removeTwoWayCounterStat(x.name));
        return {
            id: this.id,
            name: this.name,
            stats: this.stats,
            xp: this.xp.toStore(),
            harm: this.harm.toStore(),
            stress: this.stress.toStore(),
            wealth: this.wealth.toStore(),
            background: this.background,
            complication: this.complication,
            armour: (this.armour) ? this.armour.toStore() : Armour.emptyArmour(),
            equipment: this.equipment.map(eq => eq.toStore()),
            arcs: this.arcs.map(ac => ac.toStore()),
            customMoves: this.moves.filter(mv => mv.summary.source != 'common' && mv.summary.source != 'arc').map(filtered => filtered.summary),
            pronouns: this.pronouns,
            look: this.look,
            notes: this.notes,
            gmNotes: this.gmNotes,
            customCounters: this.customCounters.map(x => x.toStore()),
            customTwoWayCounters: this.twoWayCounters.map(x => x.toStore()),
            customStats: this.customStats
        }
    }

    protected addBackground(backgroundSummary: IBackgroundSummary) {
        this.background = backgroundSummary;
        if (this.background.move != null) {
            this.moves.push(new Move(this, this.background.move));
        }
    }



    public static fromStore(template: ITrilogyCharacterTemplate): TrilogyCharacter {
        const character = new TrilogyCharacter(
            template.id,
            template.name,
            template.stats,
            template.arcs.length,
            Counter.fromStore(template.xp),
            new HarmTrack(template.harm),
            Counter.fromStore(template.stress),
            Counter.fromStore(template.wealth),
            template.background,
            template.complication,
            Armour.fromStore(template.armour),
            template.equipment.map(x => Equipment.fromStore(x)),
            [],
            template.customMoves,
            template.pronouns || '',
            template.look || '',
            template.notes || '',
            template.gmNotes || '',
            template.customStats || [],
            template.customCounters || [],
            template.customTwoWayCounters || []

        );
        for (let arc of template.arcs) {
            character.addArc(arc);
        }
        return character;
    }

    public static emptyCharacter(): TrilogyCharacter {
        let allStats = ["Heart", "Mind", "Strength", "Subtlety", "Charm"];
        let stats: Array<IStatistic> = allStats.map(m => {
            return { "name": m, "modifier": 0 };
        });
        return new TrilogyCharacter(
            '',
            '',
            stats,
            0,
            new Counter('XP', 7, 0, 'Character experience counter, when filled you can hit a Turning Point'),
            new HarmTrack(),
            new Counter('Stress', 5, 0, 'Character stress counter, when filled this character is taken out.'),
            new Counter('Wealth', 7, 1, 'Character wealth counter, each level is a tenfold increase'),
            { name: 'No Background Selected', description: '', move: null, startingEquipment: '', startingWealthModifier: 0 },
            'No complication',
            null,
            [],
            [],
            [],
            '',
            '',
            '',
            '',
            [],
            [],
            []
        );
    }

}
