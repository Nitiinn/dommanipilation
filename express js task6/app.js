const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// for admin file use full address

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactus');
const successtRoutes = require('./routes/success');

app.use(bodyParser.urlencoded({extended:false}));

// use for css file
app.use(express.static(path.join(__dirname,'public')));


// this will automatically consider the admin.js file

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use('/contactus',contactRoutes);
app.use('/success',successtRoutes);

// for 404 page
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'view','404.html'));
});



app.listen(4000);
