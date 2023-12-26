import { AppService } from './app.service';
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { DataProvider } from './data';
import { search } from '@metrichor/jmespath';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): any {
    const data = this.appService.get(DataProvider.ALL);
    // console.log(data[0]);
    // console.log('intersect', this.appService.getIntersect(DataProvider.ARCANE));
    // console.log('union', this.appService.getUnion(DataProvider.ARCANE));

    return data.length;
  }

  @Get('search')
  getSearch(@Req() request: Request): any {
    const queryParams = request.query;
    const content = queryParams.t as string;
    const filter = queryParams.q as string;

    if (!content || !filter) {
      return "Search parameters 't' and 'q' required.";
    }

    const data = DataProvider.get(content);
    const result = search(data, filter);

    console.log({ content, filter, result });

    return result;
  }
}
