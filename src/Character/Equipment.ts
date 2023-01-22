import { IEquipment, EquipmentQuality } from "./IEquipment";

export class Equipment implements IEquipment {

    constructor(
        public name: string,
        public originalQuality: EquipmentQuality,
        public currentQuality: EquipmentQuality,
        public notes: string
    ) { }

    public repair() {
        if (this.currentQuality != this.originalQuality) {
            this.currentQuality = this.originalQuality;
        }
    }

    public toStore(): IEquipment {
        return {
            name: this.name,
            originalQuality: this.originalQuality,
            currentQuality: this.currentQuality,
            notes: this.notes
        };
    }

    public static fromStore(eq: IEquipment): Equipment {
        return new Equipment(eq.name, eq.originalQuality, eq.currentQuality, eq.notes);
    }

}
