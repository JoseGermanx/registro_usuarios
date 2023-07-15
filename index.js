const express = require("express");
const conn = require("./services/db");
const userModel = require("./models/user");
const createUser = require("./controllers/create");

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//RUTAS
app.post("/create", createUser );

const port = 8080;

const database = async () => {
  try {
    await conn.authenticate();
    console.log("Base de datos conectada");
    await userModel.sync();
  } catch (error) {
    console.log("Algo salió mal en la conexión de la BD", error);
  }
};

app.listen(port, () => {
  database();
  console.log("Servidor ejecutandose correctamente");
});
