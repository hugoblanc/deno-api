import { EntityRepository } from "https://denolib.com/denolib/typeorm@v0.2.23-rc3/src/decorator/EntityRepository.ts";
import { Repository } from "https://denolib.com/denolib/typeorm@v0.2.23-rc3/src/repository/Repository.ts";
import { User } from './user.entity.ts';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
}