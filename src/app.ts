import express from "express";
import bodyParser from "body-parser";
import path from "path";
import router from "./routes/index";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", router);

export default app;
