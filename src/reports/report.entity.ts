import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class report {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: number;
    
}