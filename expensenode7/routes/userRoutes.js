const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.use(express.static("public"));

router.get("/", userController.getappPage);

router.post("/addUser", userController.addSignUp);

router.get("/login", userController.getloginPage);

router.post("/login", userController.login);



module.exports = router;