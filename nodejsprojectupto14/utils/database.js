const Sequelize = require("sequelize");
const sequelize = new Sequelize("new_expense", "root", "nodecomplete", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;