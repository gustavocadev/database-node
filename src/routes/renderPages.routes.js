const { Router } = require("express");
const { renderIndex, renderTeamPage } = require("../controllers/index");
const router = Router();

// Renderizamos la vista del index
router.get("/", renderIndex);

// Renderizamos la vista de new-user
router.get("/users/new-user", (req, res) => {
    res.render("new-user");
});

router.get("/team", renderTeamPage);

module.exports = router;
