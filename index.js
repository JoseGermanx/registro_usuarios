const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = 3001;

app.listen(port, console.log("Servidor ejecutandose correctamente"));