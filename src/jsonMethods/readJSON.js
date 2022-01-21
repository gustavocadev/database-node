const fs = require("fs/promises");

const readJSON = async () => {
    const data = await fs.readFile("./src/db.json", "utf-8");
    return JSON.parse(data);
};

module.exports = readJSON;
