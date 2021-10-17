const express = require("express");
const app = express();
const morgan = require("morgan");
const hbs = require("hbs");
const path = require("path");
// Settings
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// middlewares
app.use(morgan("dev"));
app.use(
  express.urlencoded({
    extended: false,
  })
);
// Static
app.use(express.static(path.join(__dirname, "../public")));

// Router
app.use(require("./routes/index.routes"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("I'm running! 🚀");
});
