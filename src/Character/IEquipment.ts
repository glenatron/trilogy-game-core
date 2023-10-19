export enum EquipmentQuality {
    Broken = "Broken",
    Basic = "Basic",
    Serviceable = "Serviceable",
    Masterful = "Masterful"
}

export interface IEquipment {
    id: string;
    name: string;
    originalQuality: EquipmentQuality;
    currentQuality: EquipmentQuality;
    notes: string;
}

export interface IArmour extends IEquipment {
    uses: number;
}
