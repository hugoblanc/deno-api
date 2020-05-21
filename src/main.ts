import { App } from 'https://deno.land/x/alosaur/src/mod.ts';
import transformer from "https://dev.jspm.io/class-transformer@0.2.3";

import { initTypeORM } from './loader/init-typeorm.ts';
import { UserArea } from './user/user.area.ts';


const { plainToClass } = transformer;

await initTypeORM();

// Create alosaur application
const app = new App({
    areas: [UserArea],
});

app.useTransform({
    type: 'body', // parse body params
    getTransform: (transform: any, body: any) => {
        return plainToClass(transform, body);
    }
})


app.listen();