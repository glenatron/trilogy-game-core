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

    public getQualityName(): string {
        return this.equipmentQualityName(this.currentQuality);
    }

    public needsRepair(): boolean {
        return (this.currentQuality != this.originalQuality);
    }

    public reduceQuality(): void {
        if (this.currentQuality == EquipmentQuality.Masterful) {
            this.currentQuality = EquipmentQuality.Masterful;
        } else if (this.currentQuality == EquipmentQuality.Serviceable) {
            this.currentQuality = EquipmentQuality.Basic;
        } else {
            this.currentQuality = EquipmentQuality.Broken;
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

    private equipmentQualityName(quality: EquipmentQuality): string {
        var result = "Broken";
        switch (quality) {
            case EquipmentQuality.Basic: result = "Basic";
                break;
            case EquipmentQuality.Serviceable: result = "Serviceable";
                break;
            case EquipmentQuality.Masterful: result = "Masterful";
                break;
        }
        return quality;
    }

}
