import { App, Area } from 'https://deno.land/x/alosaur/src/mod.ts';
import { HomeController } from './src/controller/home.controller.ts';
import { initConnexion } from './connexion.ts';


// Declare module
@Area({
    controllers: [HomeController],
})
export class MainArea {}

// Create alosaur application
const app = new App({
    areas: [MainArea],
});

initConnexion();

app.listen();