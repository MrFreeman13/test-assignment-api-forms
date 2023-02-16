import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class UserForm {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({type: 'bigint'})
    phone: string

    @Column()
    country: string

    @Column()
    email: string

}
