import "express-async-errors";
import express, { Application, json } from "express";
import { appRoutes } from "./routes/app/app.routes";
import { handleErrors } from "./errors";
import { CronJob } from "cron";
import { api } from "./services/axios/api";

export const app: Application = express();

new CronJob(
  "55 20 * * * ",
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

new CronJob(
  "00 12 * * * ",
  async function () {
    const date = new Date();
    date.setDate(date.getDate());
    const fullDate = date.toLocaleDateString("pt-BR");
    const response = await api.post("action/sms", {
      title: `Envio de SMS - ${list.name}`,
      description: `Mensagem enviada dia ${list.name}`,
      campaign_id: "1374392",
      sms_id: "1084944",
      lists_id: `${list.id}`,
      date: `${fullDate}`,
      date_limit: `${fullDate}`,
      start_time: "19:00",
      limit_time: "20:50",
      remove_blacklist: "0",
    });
    console.log(`SMS AGendado com sucesso! ${response.data.hash}`);
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
