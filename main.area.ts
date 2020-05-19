import { App, Area } from 'https://deno.land/x/alosaur/src/mod.ts';
import { initTypeORM } from './init-typeorm.ts';
import { UserController } from './src/controller/user.controller.ts';

// Declare module
@Area({
    controllers: [UserController],
})
export class MainArea { }

// Create alosaur application
const app = new App({
    areas: [MainArea],
});

await initTypeORM();

app.listen();