const path = require('path');
const rootDir = require('../util/path');


exports.admincontroller = (req,res,next)=>{
    
    // res.sendFile(path.join(__dirname,'..','view','add-product.html'));
    // other format
    res.sendFile(path.join(rootDir,'view','add-product.html'));
}

exports.postadmin = (req,res,next)=>{
    
    console.log(req.body);
    res.redirect('/shop');
}

