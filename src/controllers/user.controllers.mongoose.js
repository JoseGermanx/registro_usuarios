
const userModel = require('../models/user.models.mongoose')


const bcrypt = require('bcrypt');
const createUserMongoose = async (req, res) => {
  const { nombre, apellido, correo, contrasena } = req.body;

  if(!nombre || !apellido || !correo || !contrasena) return res.status(400).json({msg: "Todos los campos son obligatorios"});
  
  try {
    const email = await userModel.findOne({"email": correo }); // si el email no exite devuelve un null

        // Encriptar la contraseña
        const salt = bcrypt.genSaltSync();
        
    if (email === null ) {
      const usuario = {
        name: nombre,
        lastName: apellido,
        email: correo,
        password: bcrypt.hashSync( contrasena, salt )
      };
      await userModel.create(usuario);
      res.status(200).json({ msg: "Usuario registrado" });
    } else {
      res.status(400).json({ msg: "El correo ya esta registrado" });
    }
  } catch (error) {
    res.status(400).json({ msg: "Algo salió mal", error });
    console.log("error", {msg: error});
  }
};

module.exports = {createUserMongoose};
