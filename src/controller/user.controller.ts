import { Controller, Get, Area, App } from 'https://deno.land/x/alosaur/src/mod.ts';
import { UserService } from '../service/user.service.ts';


@Controller('/users')
export class UserController {

    constructor(private userService:UserService){}

    @Get('')
    getAll() {
        return this.userService.getAll();
    }
}
