import "express-async-errors";
import express, { Application, json } from "express";
import { appRoutes } from "./routes/app/app.routes";
import { handleErrors } from "./errors";
import { CronJob } from "cron";

export const app: Application = express();

export const list: { id: string | null; name: string | null } = {
  id: null,
  name: null,
};
export const numbers: string[] = [];

new CronJob(
  "00 21 * * * ",
  function () {
    console.log(numbers);
    list.id = null;
    list.name = null;
    numbers.length = 0;
  },
  null,
  true,
  "America/Sao_Paulo"
);

app.use(json());

app.use("/webhook-ligue-lead", appRoutes);

app.use(handleErrors);
