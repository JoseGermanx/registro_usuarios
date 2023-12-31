const userModel = require("../models/user.models.mongoose");

const bcrypt = require("bcrypt");
const createUserMongoose = async (req, res) => {
  const { nombre, apellido, correo, contrasena } = req.body;

  if (!nombre || !apellido || !correo || !contrasena)
    return res.status(400).json({ msg: "Todos los campos son obligatorios" });

  try {
    const email = await userModel.findOne({ email: correo }); // si el email no exite devuelve un null

    // Encriptar la contraseña
    const salt = bcrypt.genSaltSync();

    if (email === null) {
      const usuario = {
        name: nombre,
        lastName: apellido,
        email: correo,
        password: bcrypt.hashSync(contrasena, salt),
      };
      await userModel.create(usuario);
      res.status(200).json({ msg: "Usuario registrado" });
    } else {
      res.status(400).json({ msg: "El correo ya esta registrado" });
    }
  } catch (error) {
    res.status(400).json({ msg: "Algo salió mal", error });
    console.log("error", { msg: error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find(); // lista de usuarios
    res.status(200).json(users);
  } catch(error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {

const { id } = req.params;
const {  nombre, apellido, correo } = req.body;

try {
const userChanges = {
  name: nombre,
  lastName: apellido,
  email: correo 
}
await userModel.findByIdAndUpdate(id, userChanges)
res.status(200).json({msg:"Usuario actualizado"});
} catch (error) {
  console.log(error)
}
}

const login = async (req, res) => {
  const { correo, contrasena } = req.body;

  try {
    // Verificar si el email existe
    const usuario = await userModel.findOne({ email: correo });
    if (!usuario) {
      return res.status(400).json({
        msg: "Email no está registrado",
      });
    }

    // SI el usuario está activo
    if (usuario.status !== "ACTIVE") {
      return res.status(400).json({
        msg: "Este usuario no se encuentra activo en nuestros sistemas",
      });
    }

    // Verificar la contraseña
    const validPassword = bcrypt.compareSync(contrasena, usuario.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: "Password no es correcto",
      });
    }
    
    res.json({
      usuario,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
module.exports = { createUserMongoose, getAllUsers, updateUser, login };
