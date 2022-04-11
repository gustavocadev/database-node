"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const hbs_1 = __importDefault(require("hbs"));
const morgan_1 = __importDefault(require("morgan"));
const method_override_1 = __importDefault(require("method-override"));
const path_1 = __importDefault(require("path"));
const users_routes_1 = require("./routes/users.routes");
const renderPages_routes_1 = require("./routes/renderPages.routes");
class Server {
    #port;
    app;
    constructor() {
        this.app = (0, express_1.default)();
        // puerto
        this.#port = process.env.PORT ?? 3000;
        this.configs();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        // Static
        this.app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
        // middlewares
        this.app.use(express_1.default.urlencoded({
            extended: false,
        }));
        this.app.use(express_1.default.json());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, method_override_1.default)("_method"));
    }
    configs() {
        // Settings
        this.app.set("views", path_1.default.join(__dirname, "views"));
        this.app.set("view engine", "hbs");
        hbs_1.default.registerPartials(path_1.default.join(__dirname, "views/partials"));
    }
    routes() {
        // Router
        this.app.use(users_routes_1.router);
        this.app.use(renderPages_routes_1.router);
    }
    listen() {
        this.app.listen(this.#port, () => {
            console.log("I'm running! 🚀");
        });
    }
}
exports.Server = Server;
