const fs = require("fs");

const saveToJSON = (user) => {//En la ruta hay que referenciarlo a partir de src
  fs.writeFileSync("./src/data/user.json", JSON.stringify(user, null, 2), {
    encoding: "utf-8",
  });
};

module.exports = saveToJSON;
