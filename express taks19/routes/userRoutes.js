const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.use(express.static("public"));

router.get("/", userController.getappPage);

router.get("/users", userController.getUsers);

router.get("/deleteUser/:id", userController.deleteExpense);

router.post("/addUser", userController.addExpense);

module.exports = router;