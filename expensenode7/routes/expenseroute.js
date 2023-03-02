const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expensecontroller");

router.use(express.static("public"));

 router.get("/", expenseController.getExpensePage);

router.get("/expense", expenseController.getExpense);
router.get("/deleteExpense/:expenseid", expenseController.deleteExpense);
router.post("/addExpense", expenseController.addExpense);


module.exports = router;