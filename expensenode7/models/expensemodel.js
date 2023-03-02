const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Expense = sequelize.define("expenses", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  description: Sequelize.STRING,
  catagory: {
    type: Sequelize.STRING,
  },
  amount: Sequelize.DOUBLE,
});

module.exports = Expense;