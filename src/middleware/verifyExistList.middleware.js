"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyExistsListMiddleware = void 0;
const createList_service_1 = require("../services/ligueLead/createList.service");
const app_1 = require("../app");
const getList_service_1 = require("../services/ligueLead/getList.service");
const api_1 = require("../services/axios/api");
const verifyExistsListMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (app_1.list.id) {
        return next();
    }
    else {
        const date = new Date();
        date.setDate(date.getDate() + 1);
        const fullDate = date.toLocaleDateString("pt-BR");
        const response = yield api_1.api.get("list");
        const searchList = response.data.data.find((e) => e.title === fullDate);
        if (searchList) {
            app_1.list.id = String(searchList.id);
            app_1.list.name = String(searchList.title);
        }
        else {
            yield (0, createList_service_1.createListService)(fullDate);
            yield (0, getList_service_1.getListService)(app_1.list.name);
        }
        return next();
    }
});
exports.verifyExistsListMiddleware = verifyExistsListMiddleware;
