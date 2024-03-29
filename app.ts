import cors from "cors";
import express from "express";
import DotEnv from "dotenv";
import { router } from "./router";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
DotEnv.config();

app.use(router);

app.listen(process.env.PORT || 3333, () => {
  console.log("rodando");
});
