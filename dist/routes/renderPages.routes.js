"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const index_1 = require("../controllers/index");
const router = (0, express_1.Router)();
exports.router = router;
// Renderizamos la vista del index
router.get("/", index_1.renderIndex);
// Renderizamos la vista de new-user
router.get("/users/new-user", (req, res) => {
    res.render("new-user");
});
router.get("/team", index_1.renderTeamPage);
