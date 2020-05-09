import { Controller, Get, Area, App } from 'https://deno.land/x/alosaur/src/mod.ts';
import { HomeService } from '../service/home.service.ts';

@Controller('/home')
export class HomeController {

    constructor(private homeService: HomeService){}

    @Get('/text')
    text() {
        return 'Hello world';
    }
    @Get('/json')
    json() {
        console.log("totototo");
        return this.homeService.getData();
    }
}
