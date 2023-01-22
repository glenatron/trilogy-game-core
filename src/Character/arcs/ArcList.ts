import { IArcSummary } from '../IArcSummary';
import { TheGifted } from './TheGifted';
import { TheChancer } from './TheChancer';
import { TheVolunteer } from './TheVolunteer';

export class ArcList {

    public static getArc(name: string): IArcSummary {
        switch (name) {
            case "The Gifted": return new TheGifted();
                break;
            case "The Chancer": return new TheChancer();
                break;
            case "The Volunteer": return new TheVolunteer();
                break;
        }
        throw "No arc named " + name + " in the list";
    }

}
