import express from "express"
import homeRoute from "./home"
import apaplicationRoute from "./applications"
const router = express.Router()

router.use("/", homeRoute)
router.use("/applications", apaplicationRoute)

export default router
