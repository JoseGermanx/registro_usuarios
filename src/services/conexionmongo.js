const mongoose = require('mongoose');

//main().catch(err => console.log(err));

const dbConex = async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/registrousuarios');
  console.log("Conectado a la base de datos");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = dbConex;