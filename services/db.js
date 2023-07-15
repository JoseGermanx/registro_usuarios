const { Sequelize  } = require('sequelize');
const dbPass = require('./const.js')

const conn = new Sequelize("registrousuarios", "root", dbPass, {
    host: "localhost",
    dialect: 'mysql'
} );

module.exports = conn;