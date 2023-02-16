import { AppDataSource } from "./data-source"
import { HeatingType, HouseForm, RoofType } from "./entity/HouseForm"
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


    console.log("Inserting a new house form into the database...")
    const house = new HouseForm()
    house.constructionYear = 1989
    house.size = 123
    house.numberOfFloors = 3
    house.roofType = "tilted"
    house.basement = true
    house.heatingType = "electric12"
    house.zipCode = "12346"
    await AppDataSource.manager.save(house)
    console.log("Saved a new house with id: " + house.id)

    console.log("Loading houses from the database...")
    const houses = await AppDataSource.manager.find(HouseForm)
    console.log("Loaded house forms: ", houses)

}).catch(error => console.log(error))

import app from './server'

app.listen(3001, () => {
  console.log('hello on http://localhost:3001')
})