import express, { Request, Response } from "express";
const homeRoute = express.Router();

homeRoute.get("/", (_: Request, res: Response) => {
  res.render("index", { title: "Bem vindo ao oops" });
});

export default homeRoute;
