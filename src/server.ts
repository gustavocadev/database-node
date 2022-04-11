import express, { Express } from "express"
import hbs from "hbs"
import morgan from "morgan"
import methodOverride from "method-override"
import path from "path"
import { router as UserRoutes } from "./routes/users.routes"
import { router as PagesRoutes } from "./routes/renderPages.routes"

class Server {
  port: number | string
  app: Express

  constructor() {
    this.app = express()
    // puerto
    this.port = process.env.PORT ?? 3000
    this.configs()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    // Static
    this.app.use(express.static(path.join(__dirname, "../public")))
    // middlewares

    this.app.use(
      express.urlencoded({
        extended: false,
      })
    )
    this.app.use(express.json())
    this.app.use(morgan("dev"))
    this.app.use(methodOverride("_method"))
  }
  configs() {
    // Settings
    this.app.set("views", path.join(__dirname, "views"))
    this.app.set("view engine", "hbs")
    hbs.registerPartials(path.join(__dirname, "views/partials"))
  }

  routes() {
    // Router
    this.app.use(UserRoutes)
    this.app.use(PagesRoutes)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("I'm running! 🚀")
    })
  }
}

export { Server }
