import { AutoInjectable } from "https://deno.land/x/alosaur/src/mod.ts";
import { User } from '../entities/user.entity.ts';










@AutoInjectable()
export class HomeService {

    getData() {
        const user = new User();
        return { text: 'test' };
    }
}