const app = require("./src/app/app");
const users = require("./src/models/user.models");
const { dbConnection } = require("./src/services/conexionmongo");

const port = process.env.PORT || 8080;

//users.sync(); //sequelize

const server = app.listen(port, () => {
  console.log("Servidor ejecutandose correctamente", server.address().port);
});

const conexion = async () => {
 await dbConnection();
}

conexion();
