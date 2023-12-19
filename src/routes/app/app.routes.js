"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const express_1 = require("express");
const verifyExistList_middleware_1 = require("../../middleware/verifyExistList.middleware");
const lead_controller_1 = require("../../controllers/lead.controller");
exports.appRoutes = (0, express_1.Router)();
exports.appRoutes.post("", verifyExistList_middleware_1.verifyExistsListMiddleware, lead_controller_1.addLeadController);
