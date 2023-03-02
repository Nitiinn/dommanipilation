const path = require("path");
const Sequelize = require("sequelize");
const Expense = require("../models/expensemodel");


exports.getExpensePage = (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "public", "views", "expense.html"));
  };

  exports.addExpense = (req, res, next) => {
    const description = req.body.description;
    const catagory = req.body.catagory;
    const amount = req.body.amount;
    
    Expense.create({
      description: description,
      catagory: catagory,
      amount: amount,

    })
      .then((message) => {
        console.log("Added to User");
        console.log("data addexpense",message);
       res.status(200).json({message})
      })
      .catch((err) => {
        console.log(err);
      });
  };

  exports.getExpense = (req, res, next) => {
    Expense.findAll()
      .then((data) => {
         console.log("string getExpense",data);
        res.status(200).json(data);
      })
      .catch((err) => console.log(err));
  };
  

  
  exports.deleteExpense = (req, res, next) => {
    const expenseid = req.params.expenseid;
    console.log(expenseid);
    Expense.destroy({where:{id:expenseid}}).then(()=>{
      return res.status(204).json({success:true, message:'delete item'});
    })
    .catch(err=>{
      console.log(err);
      return res.status(403).json({success:flase, message:'try again'});
    })
  };