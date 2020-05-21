import { App, Area } from 'https://deno.land/x/alosaur/src/mod.ts';
import { initTypeORM } from './init-typeorm.ts';
import { UserController } from './controller/user.controller.ts';

// Declare module
@Area({
    controllers: [UserController],
})
export class MainArea { }

await initTypeORM();

// Create alosaur application
const app = new App({
    areas: [MainArea],
});


app.listen();