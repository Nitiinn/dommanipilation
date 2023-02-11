const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');
// under admin/add-product => get
router.get('/add-product',(req,res,next)=>{
    
    // res.sendFile(path.join(__dirname,'..','view','add-product.html'));
    // other format
    res.sendFile(path.join(rootDir,'view','add-product.html'));
});
// under admin/add-product =>in post request
router.post('/add-product',(req,res,next)=>{
    
    console.log(req.body);
    res.redirect('/shop');
});
module.exports = router;