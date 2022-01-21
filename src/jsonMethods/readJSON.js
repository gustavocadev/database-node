const fs = require("fs/promises");
const path = require("path");

const readJSON = async () => {
    const data = await fs.readFile(path.join(__dirname, "../db.json"), "utf-8");
    return JSON.parse(data);
};

console.log();
module.exports = readJSON;
