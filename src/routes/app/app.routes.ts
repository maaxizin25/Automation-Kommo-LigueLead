import { Router, response } from "express";
import { verifyExistsListMiddleware } from "../../middleware/verifyExistList.middleware";
import { addLeadController } from "../../controllers/lead.controller";

export const appRoutes: Router = Router();

appRoutes.post("", verifyExistsListMiddleware, addLeadController);
