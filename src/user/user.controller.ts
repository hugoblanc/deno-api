import * as log from "https://deno.land/std/log/mod.ts";
import { Controller, Get } from 'https://deno.land/x/alosaur/src/mod.ts';
import { User } from './user.entity.ts';
import { UserService } from './user.service.ts';

@Controller('/users')
export class UserController {

    constructor(private userService: UserService) { }

    @Get()
    async getAll() {
        let users: User[];

        try {
            users = await this.userService.getAll();
        } catch (error) {
            log.error(JSON.stringify(error));
            return error;
        }

        return users;

    }
}
