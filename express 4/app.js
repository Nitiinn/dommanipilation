const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// for admin file use full address

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));

// this will automatically consider the admin.js file

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

// for 404 page
app.use((req,res,next)=>{
    res.status(404).send('<h1>Server error: Page not found');
});



app.listen(4000);
