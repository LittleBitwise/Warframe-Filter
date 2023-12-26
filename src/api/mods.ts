interface Mod {
    readonly name: string;
    readonly type: string;
    readonly uniqueName: string;
    readonly category: string;
    readonly masterable: boolean;
    readonly tradable: boolean;
    readonly isPrime: boolean;
    readonly imageName: string;

    readonly availableChallenges?: [];
    readonly baseDrain?: number;
    readonly buffSet?: boolean;
    readonly compatName?: string;
    readonly description?: string;
    readonly drops?: Drop[];
    readonly excludeFromCodex?: boolean;
    readonly fusionLimit?: number;
    readonly introduced?: Introduced;
    readonly isAugment?: boolean;
    readonly isExilus?: boolean;
    readonly isUtility?: boolean;
    readonly levelStats?: any[];
    readonly modSet?: string;
    readonly modSetValues?: number[];
    readonly numUpgradesInSet?: number;
    readonly patchlogs?: any[];
    readonly polarity?: string;
    readonly rarity?: string;
    readonly releaseDate?: string;
    readonly stats?: any[];
    readonly transmutable?: boolean;
    readonly upgradeEntries: any[];
    readonly wikiaThumbnail?: string;
    readonly wikiaUrl?: string;
}

interface Drop {
    readonly chance: number;
    readonly location: string;
    readonly rarity: string;
    readonly type: string;
}

interface Introduced {
    readonly name: string;

    readonly aliases?: string[];
    readonly date?: string;
    readonly parent?: string;
    readonly url?: string;
}
