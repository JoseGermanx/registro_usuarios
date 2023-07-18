const mongoose = require('mongoose');

const { Schema, model } = mongoose;


// creamos el schema de la base de datos
const userSchema = new Schema(
    {
        name:{
            type: String,
            require: [true, "El nombre requerido"]
        },
        lastName:{
            type: String,
            require: [true, "El apellido requerido"]
        },
        email: {
            type: String,
            require: [true, "El email es requerido"]
        },
        password: {
            type: String,
            require: [true, "El password es requerido"]
        },
        status: {
            type: String,
            require: true,
            default: 'ACTIVE',
            emun: ["ACTIVE", "BLOCK", "DELETE", "PENDING"]
        }
    }
)

// con el schema creamos el modelo

const userModel = model('User', userSchema);

module.exports = userModel;