"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.numbers = exports.list = exports.app = void 0;
require("express-async-errors");
const express_1 = __importStar(require("express"));
const app_routes_1 = require("./routes/app/app.routes");
const errors_1 = require("./errors");
const cron_1 = require("cron");
const api_1 = require("./services/axios/api");
exports.app = (0, express_1.default)();
exports.list = {
    id: null,
    name: null,
};
exports.numbers = [];
new cron_1.CronJob("00 21 * * * ", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield api_1.api.delete(`list/${exports.list.id}`);
        exports.list.id = null;
        exports.list.name = null;
        exports.numbers.length = 0;
        console.log("Executei a deleção da lista as 21h");
    });
}, null, true, "America/Sao_Paulo");
exports.app.use((0, express_1.json)());
exports.app.use("/webhook-ligue-lead", app_routes_1.appRoutes);
exports.app.use(errors_1.handleErrors);
