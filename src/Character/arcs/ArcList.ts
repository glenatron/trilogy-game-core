import { IArcSummary } from '../IArcSummary';
import { TheGifted } from './TheGifted';
import { TheChancer } from './TheChancer';
import { TheVolunteer } from './TheVolunteer';

export class ArcList {

    private static Arcs: Record<string, Function> = {
        "The Gifted": () => new TheGifted(),
        "The Chancer": () => new TheChancer(),
        "The Volunteer": () => new TheVolunteer()
    };


    public static getArc(name: string): IArcSummary {
        if (this.Arcs[name]) {
            return this.Arcs[name]();
        }
        throw "No arc named " + name + " in the list";
    }

    public static ArcNames(): Array<string> {
        return Object.keys(this.Arcs);
    }

}

