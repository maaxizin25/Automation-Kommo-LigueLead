import express, { Application, json } from "express";
import { appRoutes } from "./routes/app/app.routes";

export const app: Application = express();

export const list: { id: string | null; name: string | null } = {
  id: null,
  name: null,
};

app.use(json());

app.use("/webhook-ligue-lead", appRoutes);
