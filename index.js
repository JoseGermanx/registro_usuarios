const express = require("express");
const app = express();
const conn = require("./services/db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3001;

const database = async () => {
  try {
    await conn.authenticate();
    console.log("Base de datos conectada");
  } catch (error) {
    console.log("Algo salió mal en la conexión de la BD", error);
  }
};

app.listen(port, () => {
    database();
    console.log("Servidor ejecutandose correctamente")
});
