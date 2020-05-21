import { AutoInjectable } from "https://deno.land/x/alosaur/src/mod.ts";
import { getCustomRepository } from "https://denolib.com/denolib/typeorm@v0.2.23-rc3/src/index.ts";
import { UserRepository } from './user.repository.ts';

@AutoInjectable()
export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = getCustomRepository(UserRepository);
    }

    getAll() {
        return this.userRepository.find();
    }
}