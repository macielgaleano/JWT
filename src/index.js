const app = require("./app");
require("./database");

async function init() {
  await app.listen(3001);
  console.log(`Example app listening on port 3001! http://localhost:3001`);
}

init();
