interface Arcane {
  readonly category: string;
  readonly imageName: string;
  readonly masterable: boolean;
  readonly name: string;
  readonly tradable: boolean;
  readonly type: string;
  readonly uniqueName: string;

  readonly buildPrice?: number;
  readonly buildQuantity?: number;
  readonly buildTime?: number;
  readonly components?: any[];
  readonly consumeOnBuild?: boolean;
  readonly drops?: any[];
  readonly excludeFromCodex?: boolean;
  readonly levelStats?: any[];
  readonly patchlogs?: any[];
  readonly rarity?: string;
  readonly skipBuildTimePrice?: number;
}
