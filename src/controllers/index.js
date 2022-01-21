const users = require("./users.controllers");
const renderPages = require("./renderPages.controllers");

module.exports = {
    ...users,
    ...renderPages,
};
