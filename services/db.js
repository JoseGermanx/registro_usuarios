require("dotenv").config();
const { Sequelize  } = require('sequelize');
const credentials = require("./const");

const conn = new Sequelize(credentials.dbBame, credentials.dbUser, credentials.dbPass, {
    host: "localhost",
    dialect: 'mysql'
} );

module.exports = conn;