const app = require("./src/app/app");
const users = require("./src/models/user.models");

const port = process.env.PORT || 8080;

users.sync();

app.listen(port, () => {
  console.log("Servidor ejecutandose correctamente");
});
