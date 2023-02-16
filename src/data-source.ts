import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserForm } from "./entity/UserForm"
import { HouseForm } from "./entity/HouseForm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "root",
    database: "baupal_development",
    synchronize: true,
    logging: false,
    entities: [UserForm, HouseForm],
    migrations: [],
    subscribers: [],
})
