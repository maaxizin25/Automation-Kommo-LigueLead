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
exports.addLeadService = void 0;
const app_1 = require("../../app");
const errors_1 = require("../../errors");
const api_1 = require("../axios/api");
const addLeadService = (tel, idList) => __awaiter(void 0, void 0, void 0, function* () {
    app_1.numbers.forEach((e) => {
        if (e === tel) {
            throw new errors_1.AppError("Número já existe", 409);
        }
    });
    const response = yield api_1.api.post("list/numbers", {
        lists_id: idList,
        numbers: [tel],
    });
    if (response.status === 204) {
        app_1.numbers.push(tel);
    }
    else if (response.status === 400) {
        throw new errors_1.AppError("Falha ao adicionar lead", 400);
    }
    else {
        console.error(response.statusText);
        throw new errors_1.AppError("Falha ao adicionar lead", 500);
    }
});
exports.addLeadService = addLeadService;
