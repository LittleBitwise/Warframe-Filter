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

  /// [Intersect]
  getIntersect(type: string) {
    if (!DataProvider.VALID_TYPES.includes(type)) {
      throw new Error(`${type} not valid.`);
    }

    const data = DataProvider.get(type);
    let intersect = Object.keys(data[0]);

    data.forEach((value, index, array) => {
      if ((index + 1) in array) {
        intersect = intersect.filter(k => Object.hasOwn(array[index + 1], k))
      }
    });

    return intersect;
  }

  /// [Union]
  getUnion(type: string) {
    if (!DataProvider.VALID_TYPES.includes(type)) {
      throw new Error(`${type} not valid.`);
    }

    const data = DataProvider.get(type);

    let union = {};
    data.forEach(o => { union = Object.assign(union, o) });

    return Object.keys(union);
  }
}
