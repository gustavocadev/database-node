const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
// Settings
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views/partials"));
// middlewares
app.use(
  express.urlencoded({
    extended: false,
  })
);
// Static
app.use(express.static(path.join(__dirname, "../public")));

// Router
app.use(require("./routes/index.routes"));

// 404
app.use((req, res, next) => {
  res.status(404);
  res.render("404");
});

// puerto
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("I'm running! 🚀");
});
