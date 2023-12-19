import "express-async-errors";
import express, { Application, json } from "express";
import { appRoutes } from "./routes/app/app.routes";
import { handleErrors } from "./errors";

export const app: Application = express();

export const list: { id: string | null; name: string | null } = {
  id: null,
  name: null,
};
export const numbers: string[] = [];
app.use(json());

app.use("/webhook-ligue-lead", appRoutes);

app.use(handleErrors);
