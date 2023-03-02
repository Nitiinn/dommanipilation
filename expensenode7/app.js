const express =require('express');
const path=require('path')
const cors=require('cors')
const bodyParser = require("body-parser");

const sequelize = require('./utils/database');
const User = require("./models/userModel");
const Expense = require('./models/expensemodel');

const app = express();
app.use(cors())


const userRoute = require("./routes/userRoutes");
const expenseroute = require("./routes/expenseroute");

User.hasMany(Expense);
Expense.belongsTo(User);

app.use(bodyParser.json());

app.use("/", userRoute);
app.use("/post", userRoute);


app.use("/home", expenseroute);
app.use("/get",expenseroute);


// app.use("/expense",expenseroute);
// app.use("/addExpense", expenseroute);

sequelize
  .sync()
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));