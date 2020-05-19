import { Entity, PrimaryGeneratedColumn } from 'https://denolib.com/denolib/typeorm@v0.2.23-rc3/mod.ts';

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id!: number;
}