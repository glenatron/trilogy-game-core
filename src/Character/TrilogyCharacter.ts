
import { IStatistic } from './IStatistic';
import { Character } from './Character';
import { HarmTrack } from './HarmTrack';
import { Counter } from './Counter';
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
        customMoves: Array<IMoveSummary>
    ) {
        super(id, name, stats);
        this.addCommonMoves();
        for (let name of arcNames) {
            this.addArcByName(name);
        }
        this.harm.character = this;
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

    public currentArc(): CharacterArc {
        return this.arcs[this.arcs.length - 1];
    }

    public toStore(): ITrilogyCharacterTemplate {
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
            customMoves: this.moves.filter(mv => mv.summary.source != 'common' && mv.summary.source != 'arc').map(filtered => filtered.summary)
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
            template.customMoves
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
            []
        );
    }

}
