const { DataTypes } = require('sequelize');

const Users = dataBase.define(
    "Users",
    {
        idUser: {
            type:DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4, // 36 caracteres 
            primaryKey: true,
            allowNull: false

        }







    }
)