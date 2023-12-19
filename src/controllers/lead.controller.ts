import { Request, Response } from "express";
import { AppError } from "../errors";
import { addLeadService } from "../services/ligueLead/addLead.service";
import { list } from "../app";

export const addLeadController = async (req: Request, res: Response) => {
  if (!req.body.tel5) {
    throw new AppError("Erro no número", 500);
  }
  await addLeadService(req.body.tel5, String(list.id));
  return res.json({ message: "Lead Adicionado com sucesso" }).status(200);
};
