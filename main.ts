import { App, Area } from 'https://deno.land/x/alosaur/src/mod.ts';
import { HomeController } from './src/controller/home.controller.ts';


// Declare module
@Area({
    controllers: [HomeController],
})
export class HomeArea {}

// Create alosaur application
const app = new App({
    areas: [HomeArea],
});

app.listen();