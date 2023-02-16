import {Router} from 'express'

const router = Router()

router.get("/v1/user-forms", (req, res) => {
  res.json({message: "user-forms"});
})
router.post("/v1/user-forms", () => {})
router.get("/v1/user-forms/:id", () => {})

router.get("/v1/house-forms", () => {})
router.post("/v1/house-forms", () => {})
router.get("/v1/house-forms/:id", () => {})

export default router