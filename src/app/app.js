const express = require("express");

const app = express();
const cors = require("cors");
const morgan = require("morgan");
const router = require("../routes/user.router");
const clientRouter = require("../routes/client.router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); //configuracion de acceso a el back-end
app.use(morgan("dev")); // registro los request en consola

app.use("/api/v1", router);
app.use("/api/v2", clientRouter);
module.exports = app;