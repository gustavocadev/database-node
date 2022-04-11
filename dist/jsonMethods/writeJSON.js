"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeJSON = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const writeJSON = async (newArray) => {
    const newData = {
        users: newArray,
    };
    await promises_1.default.writeFile(path_1.default.join(__dirname, "../db.json"), JSON.stringify(newData, null, 2));
};
exports.writeJSON = writeJSON;
