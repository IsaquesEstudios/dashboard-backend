import { Request, Response } from "express";
import { MercadoPagoApi } from "./config/ApiMercadoPago";
import cors from "cors";
import express from "express";
import DotEnv from "dotenv";
import { router } from "./router";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors());
DotEnv.config();


app.use(router);


// app.get("/mercado_pago/planos", async (req: Request, res: Response) => {
//   const b: any = await MercadoPagoApi.get("preapproval_plan/search");

//   const c = b.data.results;

//   res.status(201).json({ c });
// });

app.listen(3333, () => {
  console.log("rodando");
});
