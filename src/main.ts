import { App } from 'https://deno.land/x/alosaur/src/mod.ts';

import { initTypeORM } from './loader/init-typeorm.ts';
import { UserArea } from './user/user.area.ts';

await initTypeORM();

// Create alosaur application
const app = new App({
    areas: [UserArea],
});


app.listen();