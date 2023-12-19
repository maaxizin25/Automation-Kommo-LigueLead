import "dotenv/config";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://areadocliente.liguelead.com.br/api/v2/",
  headers: {
    "api-token": process.env.API_TOKEN,
    "app-id": process.env.APP_ID,
  },
});
