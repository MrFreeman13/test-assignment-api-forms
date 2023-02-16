import { AppDataSource } from "../data-source"
import { UserForm } from "../entity/UserForm"
import { validate } from "class-validator"

// Get all
export const getUserForms = async (req, res) => {
  const userForms = await AppDataSource.manager.find(UserForm)

  res.json({data: userForms})
}

// Get by id

export const getUserFormById = async (req, res) => {
  const userForm = await AppDataSource.manager.findOneBy(UserForm, {
    id: req.params.id
  })

  res.json({data: userForm})
}

// Create User Form

export const createUserForm = async (req, res, next) => {
  const user = new UserForm()
  user.firstName = req.body.firstName
  user.lastName = req.body.lastName
  user.email = req.body.email
  user.phone = req.body.phone
  user.country = req.body.country
  
  const errors = await validate(user)
  if (errors.length > 0) {
      next(Error(`Validation failed!`))
  } else {
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)
  }

  res.json({data: user})
}
