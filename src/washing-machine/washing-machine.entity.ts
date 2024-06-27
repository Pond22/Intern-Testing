import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('machines')
export class Machine {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: false })
    inUse: boolean;

    @Column({ type: 'int', default: 0 })
    remainingTime: number;
}
