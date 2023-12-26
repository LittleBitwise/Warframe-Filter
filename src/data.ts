import { Injectable } from "@nestjs/common";

const all: [] = require('../data/all.json');
const arcanes = require('../data/arcanes.json');
const archgun = require('../data/archgun.json');
const archmelee = require('../data/archmelee.json');
const archwing = require('../data/archwing.json');
const enemy = require('../data/enemy.json');
const fish = require('../data/fish.json');
const gear = require('../data/gear.json');
const glyphs = require('../data/glyphs.json');
const melee = require('../data/melee.json');
const misc = require('../data/misc.json');
const mods = require('../data/mods.json');
const node = require('../data/node.json');
const pets = require('../data/pets.json');
const primary = require('../data/primary.json');
const quests = require('../data/quests.json');
const resources = require('../data/resources.json');
const secondary = require('../data/secondary.json');
const sentinels = require('../data/sentinels.json');
const sentinelweapons = require('../data/sentinelweapons.json');
const sigils = require('../data/sigils.json');
const skins = require('../data/skins.json');
const warframes = require('../data/warframes.json');

@Injectable()
export class DataProvider {
    static readonly ALL: string = 'all';
    static readonly ARCANE: string = 'arcanes';
    static readonly ARCHGUN: string = 'archgun';
    static readonly ARCHMELEE: string = 'archmelee';
    static readonly ARCHWING: string = 'archwing';
    static readonly ENEMY: string = 'enemy';
    static readonly FISH: string = 'fish';
    static readonly GEAR: string = 'gear';
    static readonly GLYPH: string = 'glyphs';
    static readonly MELEE: string = 'melee';
    static readonly MISC: string = 'misc';
    static readonly MOD: string = 'mods';
    static readonly NODE: string = 'node';
    static readonly PET: string = 'pets';
    static readonly PRIMARY: string = 'primary';
    static readonly QUEST: string = 'quests';
    static readonly RESOURCE: string = 'resources';
    static readonly SECONDARY: string = 'secondary';
    static readonly SENTINEL: string = 'sentinels';
    static readonly SENTINEL_WEAPON: string = 'sentinelweapons';
    static readonly SIGIL: string = 'sigils';
    static readonly SKIN: string = 'skins';
    static readonly WARFRAME: string = 'warframes';

    static readonly VALID_TYPES: string[] = [
        DataProvider.ALL,
        DataProvider.ARCANE,
        DataProvider.ARCHGUN,
        DataProvider.ARCHMELEE,
        DataProvider.ARCHWING,
        DataProvider.ENEMY,
        DataProvider.FISH,
        DataProvider.GEAR,
        DataProvider.GLYPH,
        DataProvider.MELEE,
        DataProvider.MISC,
        DataProvider.MOD,
        DataProvider.NODE,
        DataProvider.PET,
        DataProvider.PRIMARY,
        DataProvider.QUEST,
        DataProvider.RESOURCE,
        DataProvider.SECONDARY,
        DataProvider.SENTINEL,
        DataProvider.SENTINEL_WEAPON,
        DataProvider.SIGIL,
        DataProvider.SKIN,
        DataProvider.WARFRAME,
    ];
    static get(type: string): any[] {
        switch (type) {
            case DataProvider.ALL:
                return all;
            case DataProvider.ARCANE:
                return arcanes;
            case DataProvider.ARCHGUN:
                return archgun;
            case DataProvider.ARCHMELEE:
                return archmelee;
            case DataProvider.ARCHWING:
                return archwing;
            case DataProvider.ENEMY:
                return enemy;
            case DataProvider.FISH:
                return fish;
            case DataProvider.GEAR:
                return gear;
            case DataProvider.GLYPH:
                return glyphs;
            case DataProvider.MELEE:
                return melee;
            case DataProvider.MISC:
                return misc;
            case DataProvider.MOD:
                return mods;
            case DataProvider.NODE:
                return node;
            case DataProvider.PET:
                return pets;
            case DataProvider.PRIMARY:
                return primary;
            case DataProvider.QUEST:
                return quests;
            case DataProvider.RESOURCE:
                return resources;
            case DataProvider.SECONDARY:
                return secondary;
            case DataProvider.SENTINEL:
                return sentinels;
            case DataProvider.SENTINEL_WEAPON:
                return sentinelweapons;
            case DataProvider.SIGIL:
                return sigils;
            case DataProvider.SKIN:
                return skins;
            case DataProvider.WARFRAME:
                return warframes;
            default:
                return [];
        }
    }
}