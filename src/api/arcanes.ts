interface Arcane {
    readonly category: string;
    readonly imageName: string;
    readonly masterable: boolean;
    readonly name: string;
    readonly tradable: boolean;
    readonly type: string;
    readonly uniqueName: string;

    readonly drops?: any[];
    readonly levelStats?: any[];
    readonly rarity?: string;
    readonly excludeFromCodex?: boolean;
    readonly patchlogs?: any[];
    readonly buildPrice?: number;
    readonly buildQuantity?: number;
    readonly buildTime?: number;
    readonly components?: any[];
    readonly consumeOnBuild?: boolean;
    readonly skipBuildTimePrice?: number;
}
