const express = require("express");
const app = express();
const conn = require("./services/db");
const userModel = require("./models/user")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//RUTAS
app.post("/create", )
app.get("/user", )

const port = 3001;

const database = async () => {
  try {
    await conn.authenticate();
    console.log("Base de datos conectada");
    await userModel.sync({force:true});
  } catch (error) {
    console.log("Algo salió mal en la conexión de la BD", error);
  }
};

app.listen(port, () => {
  database();
  console.log("Servidor ejecutandose correctamente");
});
