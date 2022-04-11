"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const server_1 = require("./server");
const server = new server_1.Server();
// server.app.use((req, res, next) => {
//   res.status(404)
//   res.render("404")
// })
server.listen();
