import express from "express";
import { create } from "express-handlebars";
import path from "path";
import router from "./routes";
const app = express();
const hbs = create({
  extname: ".hbs",
});

app.use(express.static(path.join(__dirname, "..", "..", "public")));

app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

app.use(router);

export default app;
