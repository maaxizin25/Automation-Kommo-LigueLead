import "express-async-errors";
import express, { Application, json } from "express";
import { appRoutes } from "./routes/app/app.routes";
import { handleErrors } from "./errors";
import { CronJob } from "cron";
import { api } from "./services/axios/api";

export const app: Application = express();

new CronJob(
  "00 21 * * * ",
  async function () {
    await api.delete(`list/${list.id}`);
    list.id = null;
    list.name = null;
    numbers.length = 0;
    console.log("Executei a deleção da lista as 21h");
  },
  null,
  true,
  "America/Sao_Paulo"
);

export const list: { id: string | null; name: string | null } = {
  id: null,
  name: null,
};
export const numbers: string[] = [];
app.use(json());

app.use("/webhook-ligue-lead", appRoutes);

app.use(handleErrors);
