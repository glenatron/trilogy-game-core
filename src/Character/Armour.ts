import { EquipmentQuality, IArmour } from './IEquipment';
import { Equipment } from './Equipment';
import { Counter } from './Counter';

export class Armour extends Equipment {

    public uses = new Counter('Uses', 15, 5, "How many uses remain before this armour is broken.");

    constructor(
        name: string,
        originalQuality: EquipmentQuality,
        currentQuality: EquipmentQuality,
        notes: string,
        useCount: number = -1,
        id: string = ''
    ) {
        super(name, originalQuality, currentQuality, notes, id);
        if (useCount < 0) {
            useCount = 0;

            switch (this.currentQuality) {
                case EquipmentQuality.Masterful: useCount += 9;
                case EquipmentQuality.Serviceable: useCount += 6;
                case EquipmentQuality.Serviceable: useCount += 3;
                    break;
            }
        }
        switch (this.originalQuality) {
            case EquipmentQuality.Masterful: this.uses.size = 21;
                break;
            case EquipmentQuality.Serviceable: this.uses.size = 9;
                break;
            case EquipmentQuality.Serviceable: this.uses.size = 3;
                break;
        }
        this.uses.setValue(useCount);
    }

    public useArmour() {
        if (this.currentQuality != EquipmentQuality.Broken) {
            this.uses.decrement();
            if (this.currentQuality == EquipmentQuality.Masterful && this.uses.getValue() <= 9) {
                this.currentQuality = EquipmentQuality.Serviceable;
            } else if (this.currentQuality == EquipmentQuality.Serviceable && this.uses.getValue() <= 3) {
                this.currentQuality = EquipmentQuality.Basic;
            } else if (this.uses.getValue() == 0) {
                this.currentQuality = EquipmentQuality.Broken;
            }
        }
    }

    public repairArmour() {
        this.repair();
        switch (this.currentQuality) {
            case EquipmentQuality.Basic: this.uses.setValue(3);
                break;
            case EquipmentQuality.Serviceable: this.uses.setValue(6);
                break;
            case EquipmentQuality.Masterful: this.uses.setValue(18);
                break;
        }
    }

    public override toStore(): IArmour {
        return {
            id: this.id,
            name: this.name,
            originalQuality: this.originalQuality,
            currentQuality: this.currentQuality,
            notes: this.notes,
            uses: this.uses.getValue()
        };
    }

    public static override fromStore(arm: IArmour): Armour {
        return new Armour(
            arm.name,
            arm.originalQuality,
            arm.currentQuality,
            arm.notes,
            arm.uses,
            arm.id
        );

    }

    public static emptyArmour(): IArmour {
        return {
            id: crypto.randomUUID(),
            name: 'No armour',
            originalQuality: EquipmentQuality.Broken,
            currentQuality: EquipmentQuality.Broken,
            notes: '',
            uses: 0
        };
    }




}
