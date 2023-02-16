import { AppDataSource } from "../data-source"
import { HeatingType, HouseForm, RoofType } from "../entity/HouseForm"

// Get all
export const getHouseForms = async (req, res) => {
  const housesForms = await AppDataSource.manager.find(HouseForm)

  res.json({data: housesForms})
}

// Get by id

export const getHouseFormById = async (req, res) => {
  const houseForm = await AppDataSource.manager.findOneBy(HouseForm, {
    id: req.params.id
  })

  res.json({data: houseForm})
}

// Create House Form

export const createHouseForm = async (req, res) => {
  const house = new HouseForm()
  house.constructionYear = req.body.constructionYear
  house.size = req.body.size
  house.numberOfFloors = req.body.numberOfFloors
  house.roofType = req.body.roofType
  house.basement = req.body.basement
  house.heatingType = req.body.heatingType
  house.zipCode = req.body.zipCode
  await AppDataSource.manager.save(house)
  console.log("Saved a new house with id: " + house.id)
  
  res.json({data: house})
}
