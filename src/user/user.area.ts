import { Area } from 'https://deno.land/x/alosaur/src/mod.ts';

import { UserController } from './user.controller.ts';

// Declare module
@Area({
    controllers: [UserController],
})
export class UserArea { }

