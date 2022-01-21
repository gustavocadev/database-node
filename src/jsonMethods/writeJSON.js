const fs = require("fs/promises");

const writeJSON = async (newArray) => {
    const newData = {
        users: newArray,
    };
    await fs.writeFile(
        path.join(__dirname, "../db.json"),
        JSON.stringify(newData)
    );
};

module.exports = writeJSON;
