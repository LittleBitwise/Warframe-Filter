import { Injectable } from '@nestjs/common';
import { DataProvider } from './data';

@Injectable()
export class AppService {
  get(type: string): Mod[] {
    if (!DataProvider.VALID_TYPES.includes(type)) {
      throw new Error(`get(${type}) not valid.`);
    }

    const data = DataProvider.get(type);
    return data;
  }

  /// [Intersect]
  getIntersect(type: string) {
    if (!DataProvider.VALID_TYPES.includes(type)) {
      throw new Error(`getIntersect(${type}) not valid.`);
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
      throw new Error(`getUnion(${type}) not valid.`);
    }

    const data = DataProvider.get(type);

    let union = {};
    data.forEach(o => { union = Object.assign(union, o) });

    return Object.keys(union);
  }
}
