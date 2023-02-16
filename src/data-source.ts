import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserForm } from "./entity/UserForm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "",
    database: "baupal_development",
    synchronize: true,
    logging: false,
    entities: [UserForm],
    migrations: [],
    subscribers: [],
})
