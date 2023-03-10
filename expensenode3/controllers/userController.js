const path = require("path");
const Sequelize = require("sequelize");
const User = require("../models/userModel");

exports.getappPage = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "public", "views", "index.html"));
};



exports.addSignUp = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ where: { email: email } })
    .then((user) => {
      if (user) {
        res
          .status(409)
          .send(
            `<script>alert('This email is already taken. Please choose another one.'); window.location.href='/'</script>`
          );
      } else {
        
           User.create({
            name: name,
            email: email,
            password: password,
          });
        
        res
          .status(200)
          .send(
            `<script>alert('User Created Successfully!'); window.location.href='/'</script>`
          );
      }
    })
    .catch((err) => console.log(err));
};


