import { Router } from 'express';
import { body } from "express-validator";
import { getHouseForms } from './handlers/houseForm';
import { getHouseFormById } from './handlers/houseForm';
import { createHouseForm } from './handlers/houseForm';

const router = Router()

router.get("/v1/user-forms", (req, res) => {
  res.json({message: "user-forms"});
})
router.post("/v1/user-forms", () => {})
router.get("/v1/user-forms/:id", () => {})

router.get("/v1/house-forms", getHouseForms)
router.post("/v1/house-forms", createHouseForm)
router.get("/v1/house-forms/:id", getHouseFormById)

export default router