import { createConnection } from 'https://denolib.com/denolib/typeorm@v0.2.23-rc3/mod.ts';

export function initConnexion() {


    createConnection({
        type: "postgres",
        host: "172.17.0.2",
        port: 5432,
        username: "postgres",
        password: "free",
        database: "postgres",
        entities: [
            "src/entities/*.ts"
        ],
        synchronize: true,
    }).then(connection => {
        // here you can start to work with your entities
    }).catch(error => console.log(error));

}

