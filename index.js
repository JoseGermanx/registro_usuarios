const express = require("express");
const app = express();
const conn = require("./services/db");
const userModel = require("./models/user");
const createUser = require("./controllers/create");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//RUTAS
app.post("/create", createUser );
app.get(); //obtener lista de los usuarios
app.get(); // obtener detalle de un usuario
app.put(); // modificar los algun dato: dirección, numero de telefono.
app.delete(); // borrar fisicamente el usuario
app.put(); // borrado lógico de un usuario (cambiar una propiedad en la base de datos)


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
