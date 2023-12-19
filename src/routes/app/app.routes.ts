import { Router, response } from "express";
import { verifyExistsListMiddleware } from "../../middleware/verifyExistList.middleware";

export const appRoutes: Router = Router();

appRoutes.post("", verifyExistsListMiddleware);
