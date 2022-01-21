require("dotenv").config();
const Server = require("./server");

const server = new Server();

server.app.use((req, res, next) => {
    res.status(404);
    res.render("404");
});

server.listen();
