const path = require('path');
const rootDir = require('../util/path');

exports.successcontroller = (req,res,next)=>{
    
    res.sendFile(path.join(rootDir,'view','success.html'));
}
