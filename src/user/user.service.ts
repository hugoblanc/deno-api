import { AutoInjectable } from "https://deno.land/x/alosaur/src/mod.ts";
import { getCustomRepository } from "https://denolib.com/denolib/typeorm@v0.2.23-rc3/src/index.ts";
import { UserRepository } from './user.repository.ts';
import { User } from './user.entity.ts';

@AutoInjectable()
export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = getCustomRepository(UserRepository);
    }

    getAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    save(user: User): Promise<User> {
        return this.userRepository.save(user);
    }
}