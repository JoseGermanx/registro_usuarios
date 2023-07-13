const users = require('../models/user');


const createUser = async (req, res) => {

    const { nombre, apellido, correo, contrasena  } = req.body;
    try {
        await users.create({
            name: nombre,
            lastName: apellido,
            email: correo,
            password: contrasena
        });
        res.status(200).json({msg:"Usuario registrado"})
        
    } catch (error) {
        console.log("error", error)
        
    }
 
}

module.exports = createUser;