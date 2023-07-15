const users = require("../models/user.models");

const createUser = async (req, res) => {
  const { nombre, apellido, correo, contrasena } = req.body;

  if(!nombre || !apellido || !correo || !contrasena) return res.status(400).json({msg: "Todos los campos son obligatorios"});
  
  try {
    const email = await users.findOne({ where: { email: correo } });
    if (!email) {
      await users.create({
        name: nombre,
        lastName: apellido,
        email: correo,
        password: contrasena,
      });
      res.status(200).json({ msg: "Usuario registrado" });
    } else {
      res.status(400).json({ msg: "El correo ya esta registrado" });
    }
  } catch (error) {
    res.status(400).json({ msg: "Algo salió mal", error });
    console.log("error", {msg: error});
  }
};

module.exports = {createUser};
