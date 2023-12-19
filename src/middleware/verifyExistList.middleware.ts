import { NextFunction, Request, Response } from "express";
import { createListService } from "../services/ligueLead/createList.service";
import { list } from "../app";
import { getListService } from "../services/ligueLead/getList.service";

export const verifyExistsListMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(list);
  if (list.id) {
    console.log(list);
    return next();
  }
  const date = new Date();
  date.setDate(date.getDate() + 1);
  const fullDate = date.toLocaleDateString("pt-BR");
  await createListService(fullDate);
  await getListService(list.name!);
  next();
};
