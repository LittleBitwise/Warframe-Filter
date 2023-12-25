import { AppService } from './app.service';
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { DataProvider } from './data';
import { search } from '@metrichor/jmespath';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getAll(): any {
    const data = this.appService.getMods();
    // console.log(data[0]);
    // console.log(this.appService.getIntersect());
    // console.log(this.appService.getDropsIntersect());
    // console.log(this.appService.getIntroducedIntersect());
    // console.log(Object.keys(this.appService.getUnion()));

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
    console.log({content, filter, result});

    return result;
  }

  @Get('wo')
  getWithoutIntroduced(): any {
    const data = this.appService.getWithoutIntroduced();
    console.log('length', data.length);

    return data;
  }

  @Get('w')
  getIntroduced(): any {
    const data = this.appService.getIntroduced();
    console.log('length', data.length);

    return data;
  }
}