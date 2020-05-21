import * as log from "https://deno.land/std/log/mod.ts";
import { Body, Controller, Get, Post } from 'https://deno.land/x/alosaur/src/mod.ts';
import { User } from './user.entity.ts';
import { UserService } from './user.service.ts';

@Controller('/users')
export class UserController {

    constructor(private userService: UserService) { }

    @Get()
    async getAll(): Promise<User[]> {
        let users: User[];

        try {
            users = await this.userService.getAll();
        } catch (error) {
            log.error(JSON.stringify(error));
            return error;
        }

        return users;
    }

    @Post()
    async create(@Body(User) user: User): Promise<User> {
        log.error(JSON.stringify(user));
        try {
            user = await this.userService.save(user);
        } catch (error) {
            log.error(JSON.stringify(error));
            return error;
        }

        return user;
    }
}
