import { Injectable } from '@nestjs/common';
import { DataProvider } from './data';

@Injectable()
export class AppService {
  getMods(): Mod[] {
    return DataProvider.get(DataProvider.MOD);
  }

  getIntroduced() {
    return this
      .getMods()
      .filter((mod: Mod) => mod.introduced);
  }

  getWithoutIntroduced() {
    return this
      .getMods()
      .filter((mod: Mod) => !mod.introduced);
  }

  getIntersect() {
    const data = this.getMods();
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
      .getMods()
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
      .getMods()
      .filter(mod => Object.hasOwn(mod, 'introduced'));

    let intersect = Object.keys(data[0].introduced);
    console.log('debug', intersect);

    data.forEach(o => {
      intersect = intersect.filter(k => Object.hasOwn(o, k))
    })

    return intersect;
  }

  getUnion() {
    const data = this.getMods();

    let union = {};
    data.forEach(o => { union = Object.assign(union, o); });

    return union;
  }
}
