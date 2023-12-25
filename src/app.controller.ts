import { AppService } from './app.service';
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

var jmespath = require('jmespath');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getAll(): any {
    const data = this.appService.getAll();
    // console.log(data[0]);
    // console.log(this.appService.getIntersect());
    // console.log(this.appService.getDropsIntersect());
    // console.log(this.appService.getIntroducedIntersect());
    // console.log(Object.keys(this.appService.getUnion()));

    return data.length;
  }

  @Get('search')
  getSearch(@Req() request: Request): any {
    const data = this.appService.getAll();
    const queryParams = request.query;

    const content = queryParams.t;
    const filter = queryParams.q;

    if (!content || !filter) {
      return "Search parameters 't' and 'q' required.";
    }

    const result = jmespath.search(data, filter);
    console.log(query, result);

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

  @Get('year')
  getSearchByYear(): any {
    console.log('in', this.appService.getIntroduced().length, 'out', this.appService.getWithoutIntroduced().length);
    const data = this.appService.search('2014');
    console.log(data[0]);

    let html = '';
    data.forEach(
      item => html += `<li><a href="${item['wikiaUrl']}">${item['name']}</a></li>`
    );

    return '<ol>' + html + '</ol>';
  }
}