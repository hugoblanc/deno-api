import { createConnection } from 'https://denolib.com/denolib/typeorm@v0.2.23-rc3/mod.ts';
import { User } from '../user/user.entity.ts';

export function initTypeORM() {

    return createConnection({
        type: "postgres",
        host: "172.17.0.2",
        port: 5432,
        username: "postgres",
        password: "free",
        database: "postgres",
        entities: [
            User
        ],
        synchronize: true,
    });
}

