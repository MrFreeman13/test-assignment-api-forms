import { Router } from 'express';
import { body } from "express-validator";
import { getHouseForms } from './handlers/houseForm';
import { getHouseFormById } from './handlers/houseForm';
import { createHouseForm } from './handlers/houseForm';
import { getUserForms } from './handlers/userForm';
import { getUserFormById } from './handlers/userForm';
import { createUserForm } from './handlers/userForm';

const router = Router()

router.get("/v1/user-forms", getUserForms)
router.post("/v1/user-forms", createUserForm)
router.get("/v1/user-forms/:id", getUserFormById)

router.get("/v1/house-forms", getHouseForms)
router.post("/v1/house-forms", createHouseForm)
router.get("/v1/house-forms/:id", getHouseFormById)

export default router