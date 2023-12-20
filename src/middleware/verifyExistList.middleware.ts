import { NextFunction, Request, Response } from "express";
import { createListService } from "../services/ligueLead/createList.service";
import { list } from "../app";
import { getListService } from "../services/ligueLead/getList.service";
import { api } from "../services/axios/api";

export const verifyExistsListMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (list.id) {
    return next();
  } else {
    const date = new Date();
    date.setDate(date.getDate());
    const fullDate = date.toLocaleDateString("pt-BR");
    const response = await api.get("list");
    const searchList: { id: string; title: string } = response.data.data.find(
      (e: { id: String; title: String }) => e.title === fullDate
    );
    if (searchList) {
      list.id = String(searchList.id);
      list.name = String(searchList.title);
    } else {
      await createListService(fullDate);
      await getListService(list.name!);
    }
    return next();
  }
};
