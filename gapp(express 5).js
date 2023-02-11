const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
// take the message array to store the data
const messages = [];


// take the user input and show them on the screen
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/messages', (req, res, next) => {
  fs.readFile('user.txt',(err,messages)=>{
    if(err)
    {
      console.log(err);
      messages="no chat exist";
    }
    res.send(`
    ${messages}<form action = "/messages" onsubmit = "document.getElementById('username').value=localStorage.getItem('username')"
    method="POST">
    <input id="message" name="message" type="text" placeholder="message">
    <input id="username" name="username" type="hidden" >
    <button type="submit">send</button>
    </form>
  `);
  })
  
});


// post request to send the data to server
app.post('/messages', (req, res, next) => {
  console.log(req.body.username);
  
  messages.push(`{${req.body.username}:${req.body.message}}`);
  console.log(req.body.message);
  console.log(`{${req.body.username}:${req.body.message}}`);
  fs.writeFile('user.txt', `{${req.body.username}:${req.body.message}}`,{flag:'a'}, (err)=>{
    err ? console.log(err): res.redirect('/messages');
  })
  
});

// after login user send to the message page
app.get('/login', (req, res, next) => {
  

  res.send(
    `<form action="/login" method="POST" onsubmit="localStorage.setItem('username', document.getElementById('username').value);">
        <input type="text" name="username" id="username" >
        <button type="submit">login</button>
        </form>`
  );
});

app.post('/login', (req, res, next) => {
  
  res.redirect('/messages');
});






app.use((req, res, next) => {
  res.status(404).send('<h1>Server error: Page not found');
});

app.listen(3000);
