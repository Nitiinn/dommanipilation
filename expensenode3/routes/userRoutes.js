const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.use(express.static("public"));

router.get("/", userController.getappPage);

router.post("/addUser", userController.addSignUp);

module.exports = router;