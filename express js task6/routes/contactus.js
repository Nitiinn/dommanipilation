const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');
// under admin/add-product => get
router.get('/',(req,res,next)=>{
    
    // res.sendFile(path.join(__dirname,'..','view','add-product.html'));
    // other format
    res.sendFile(path.join(rootDir,'view','contactus.html'));
});
// under admin/add-product =>in post request
router.post('/contactus',(req,res,next)=>{
    
    console.log(req.body);
    res.redirect('/success');
});
module.exports = router;