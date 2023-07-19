const router = require("express").Router();

//const { createUser} = require("../controllers/user.controllers");
const { createUserMongoose, getAllUsers, updateUser } = require("../controllers/user.controllers.mongoose");


router.post("/createuser", createUserMongoose);
router.get("/getallusers", getAllUsers);
router.put("/updateuser/:id", updateUser);

module.exports = router;