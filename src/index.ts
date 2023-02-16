import { AppDataSource } from "./data-source"
import { UserForm } from "./entity/UserForm"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new UserForm()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.email = "timber-saw@gmail.com"
    user.phone = "17565434323"
    user.country = "Germany"
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(UserForm)
    console.log("Loaded user forms: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))

import app from './server'

app.listen(3001, () => {
  console.log('hello on http://localhost:3001')
})