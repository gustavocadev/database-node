const fs = require("fs/promises");

const writeJSON = async (newArray) => {
    const newData = {
        users: newArray,
    };
    await fs.writeFile("./src/db.json", JSON.stringify(newData));
};

module.exports = writeJSON;
