import { AutoInjectable } from "https://deno.land/x/alosaur/src/mod.ts";
import { UserRepository } from '../repository/user.repository.ts';

@AutoInjectable()
export class UserService {
    constructor(private userRepository: UserRepository) {}
    getAll() {
        return this.userRepository.find();
    }
}