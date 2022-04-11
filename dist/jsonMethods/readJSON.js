"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readJSON = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const readJSON = async () => {
    const data = await promises_1.default.readFile(path_1.default.join(__dirname, "../db.json"), "utf-8");
    return JSON.parse(data);
};
exports.readJSON = readJSON;
