const app = require("./src/app/app");
const users = require("./src/models/user.models");
const express = require("express");

const port = process.env.PORT || 8080;

users.sync();

const server = app.listen(port, () => {
  console.log("Servidor ejecutandose correctamente", server.address().port);
});