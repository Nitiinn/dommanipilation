const path = require('path');
const rootDir = require('../util/path');


exports.contactuscontroller = (req,res,next)=>{
    
    // res.sendFile(path.join(__dirname,'..','view','add-product.html'));
    // other format
    res.sendFile(path.join(rootDir,'view','contactus.html'));
}

exports.postcontactus = (req,res,next)=>{
    
    console.log(req.body);
    res.redirect('/success');
}

