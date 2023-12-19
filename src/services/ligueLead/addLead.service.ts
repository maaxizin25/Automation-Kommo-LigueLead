import { numbers } from "../../app";
import { AppError } from "../../errors";
import { api } from "../axios/api";

export const addLeadService = async (tel: string, idList: string) => {
  numbers.forEach((e) => {
    if (e === tel) {
      throw new AppError("Número já existe", 409);
    }
  });

  const response = await api.post("list/numbers", {
    lists_id: idList,
    numbers: [tel],
  });

  if (response.status === 204) {
    numbers.push(tel);
  } else if (response.status === 400) {
    throw new AppError("Falha ao adicionar lead", 400);
  } else {
    console.error(response.statusText);
    throw new AppError("Falha ao adicionar lead", 500);
  }
};
