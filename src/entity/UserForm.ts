import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import {
    IsEmail
} from "class-validator"

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
    @IsEmail()
    email: string

}
