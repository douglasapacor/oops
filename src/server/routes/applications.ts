import express, { Request, Response } from "express"
const apaplicationRoute = express.Router()

apaplicationRoute.get("/", (_: Request, res: Response) => {
  res.render("applications", { title: "oops - Aplicações" })
})

export default apaplicationRoute
