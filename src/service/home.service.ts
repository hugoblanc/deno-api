import {AutoInjectable} from "https://deno.land/x/alosaur/src/mod.ts";

@AutoInjectable()
export class HomeService {

    getData(){
        return { text: 'test' };
    }
}