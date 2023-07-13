const { Sequelize  } = require('sequelize');

const conn = new Sequelize("registrousuarios", "root", "", {
    host: "localhost",
    dialect: 'mysql'
} );

module.exports = conn;