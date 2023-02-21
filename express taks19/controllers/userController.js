const path = require("path");
const Sequelize = require("sequelize");
const User = require("../models/userModel");

exports.getappPage = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "public", "views", "index.html"));
};

exports.getUsers = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => console.log(err));
};

exports.addExpense = (req, res, next) => {
  const description = req.body.description;
  const catagory = req.body.catagory;
  const amount = req.body.amount;

  User.create({
    description: description,
    catagory: catagory,
    amount: amount,
  })
    .then((result) => {
      console.log("Added to User");
      res.redirect("/get");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteExpense = (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  User.findByPk(id)
    .then((user) => {
      return user.destroy();
    })
    .then((result) => {
      console.log("User Deleted");
      res.redirect("/get");
    })
    .catch((err) => {
      console.log(err);
    });
};