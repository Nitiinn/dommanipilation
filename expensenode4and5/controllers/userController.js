const path = require("path");
const Sequelize = require("sequelize");
const User = require("../models/userModel");

exports.getappPage = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "public", "views", "index.html"));
};

exports.getloginPage = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "public", "views", "login.html"));
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

exports.login = async (req, res) => {
  const password = req.body.password;
  const email = req.body.email;
  try{
  console.log(password);
  const user  = await User.findAll({ where : { email }})
 
      if(user.length > 0){
         if( user[0].password === password) {
              return res.status(200).json({success: true, message: "User logged in successfully"})
          }
          else{
          return res.status(400).json({success: false, message: 'Password is incorrect'})
         }
      
      } else {
          return res.status(404).json({success: false, message: 'User Doesnot exitst'})
      }
  }catch(err){
    console.log("error",err);
      res.status(500).json({message: err, success: false})
  }
}


