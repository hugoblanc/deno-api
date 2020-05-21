# Deno Api: [Alosaur](https://github.com/alosaur/alosaur) + [TypeORM](https://typeorm.io/#/)

This repository provide a good starting point to setup a deno REST API using Alosaur and TypeORM.

I used this fork of typeorm: [https://github.com/denolib/typeorm](https://github.com/denolib/typeorm)

## Requirements

A postgres database running with the following properties: (MySql not currently supported) 

- host: __172.17.0.2__
- username: __postgres__
- password: __free__
- database's name: __postgres__

You have to modify `src/loader/init-typeorm.ts` if theses values don't corresponds to yours.  

## Run

Use the deno runner: 

```bash
deno run --unstable --allow-net --config ./tsconfig.json src/main.ts
```
We don't need the `--allow-read` flag if we specify explicitly entities in the `init-typeorm.ts` file.

## Usage

Check the result : [http://localhost:8000/users](http://localhost:8000/users)


## License
[MIT](https://choosealicense.com/licenses/mit/)