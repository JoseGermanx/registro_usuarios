const router = require("express").Router();

//const { createUser} = require("../controllers/user.controllers");
const { createUserMongoose } = require("../controllers/user.controllers.mongoose");


router.post("/createuser", createUserMongoose);

module.exports = router;