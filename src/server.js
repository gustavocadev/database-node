const express = require("express");
const hbs = require("hbs");
const morgan = require("morgan");
const methodOverride = require("method-override");
const path = require("path");
class Server {
    constructor() {
        this.app = express();
        // puerto
        this.port = process.env.PORT;
        this.configs();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        // Static
        this.app.use(express.static(path.join(__dirname, "../public")));
        // middlewares
        this.app.use(
            express.urlencoded({
                extended: false,
            })
        );
        this.app.use(morgan("dev"));
        this.app.use(methodOverride("_method"));
    }
    configs() {
        // Settings
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "hbs");
        hbs.registerPartials(path.join(__dirname, "views/partials"));
    }

    routes() {
        // Router
        this.app.use(require("./routes/users.routes"));
        this.app.use(require("./routes/renderPages.routes"));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("I'm running! 🚀");
        });
    }
}

module.exports = Server;
