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
exports.createListService = void 0;
const app_1 = require("../../app");
const api_1 = require("../axios/api");
const createListService = (date) => __awaiter(void 0, void 0, void 0, function* () {
    yield api_1.api
        .post("list", {
        title: date,
        description: "Leads do dia",
        dynamic: "1",
        list: [""],
    })
        .then(function (response) {
        console.log(response);
    })
        .catch(function (error) { });
    app_1.list.name = date;
    return date;
});
exports.createListService = createListService;
