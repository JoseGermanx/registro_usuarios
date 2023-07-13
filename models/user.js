const { DataTypes } = require("sequelize");
const dataBase = require("../services/db")


const Users = dataBase.define(
  "Users",
  {
    idUser: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // 36 caracteres
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // email@email.com tiene este formato
        notNull: {
          msg: "El correo es obligatorio",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "La contraseña es obligatoria",
        },
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El nombre es obligatoria",
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El apellido es obligatorio",
        },
      },
    },
    status: {
      type: DataTypes.ENUM("ACTIVE", "BLOCK", "DELETE", "PENDING"),
      allowNull: false,
      defaultValue: "ACTIVE",
    },
  },
  {
    timestamps: true,
    createdAt: true,
    updateAt: true,
  }
);

module.exports = Users;
