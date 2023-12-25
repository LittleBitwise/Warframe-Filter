import { Injectable } from '@nestjs/common';

const mods = require('../data/Mods.json');

@Injectable()
export class AppService {
  search(query: string) {
    return this.getIntroduced()
      .filter((mod: Mod) => mod.introduced.date.includes(query))
      .map((mod: Mod) => ({ name: mod.name, wikiaUrl: mod.wikiaUrl }));
  }

  getAll(): Mod[] {
    return mods;
  }

  getIntroduced() {
    const data: ReadonlyArray<Mod> = mods;

    return data
      .filter((mod: Mod) => mod.introduced);
  }

  getWithoutIntroduced() {
    const data: ReadonlyArray<Mod> = mods;

    return data
      .filter((mod: Mod) => !mod.introduced);
  }

  getIntersect() {
    const data = this.getAll();
    let intersect = Object.keys(data[0]);

    data.forEach((value, index, array) => {
      if ((index + 1) in array) {
        intersect = intersect.filter(k => Object.hasOwn(array[index + 1], k))
      }
    });

    return intersect;
  }

  getDropsIntersect() {
    const data = this
      .getAll()
      .filter(mod => Object.hasOwn(mod, 'drops'));

    let intersect = Object.keys(data[0].drops[0]);

    data.forEach(o => {
      o.drops.forEach((drop: Drop) => {
        intersect = intersect.filter(k => Object.hasOwn(drop, k))
      });
    })

    return intersect;
  }

  getIntroducedIntersect() {
    const data = this
      .getAll()
      .filter(mod => Object.hasOwn(mod, 'introduced'));

    let intersect = Object.keys(data[0].introduced);
    console.log('debug', intersect);

    data.forEach(o => {
      intersect = intersect.filter(k => Object.hasOwn(o, k))
    })

    return intersect;
  }

  getUnion() {
    const data = this.getAll();

    let union = {};
    data.forEach(o => union = Object.assign(union, o));

    return union;
  }
}
