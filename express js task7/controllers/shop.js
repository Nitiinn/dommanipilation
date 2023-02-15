const path = require('path');
const rootDir = require('../util/path');

exports.shopcontroller =(req,res,next)=>{
    
    res.sendFile(path.join(rootDir,'view','shop.html'));
}