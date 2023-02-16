import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

export type RoofType = "flat" | "tilted"
export type HeatingType = "gas" | "oil" | "electric"

@Entity()
export class HouseForm {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    constructionYear: number

    @Column()
    size: number

    @Column()
    numberOfFloors: number

    @Column()
    basement: boolean

    @Column()
    zipCode: string

    @Column({
        type: "enum",
        enum: ["flat", "tilted"],
        default: "flat"
    })
    roofType: RoofType

    @Column({
        type: "enum",
        enum: ["gas", "oil", "electric"],
        default: "oil"
    })
    heatingType: HeatingType

}
