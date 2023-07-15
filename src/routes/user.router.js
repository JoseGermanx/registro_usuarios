const router = require("express").Router();

const { createUser} = require("../controllers/user.controllers");

router.post("/createuser", createUser);

module.exports = router;