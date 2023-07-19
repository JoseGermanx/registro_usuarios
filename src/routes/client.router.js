const clientRouter = require("express").Router();


clientRouter.post("/createclient", (req,res) =>{
    res.json({msg: "Ruta cliente"})
});

module.exports = clientRouter;