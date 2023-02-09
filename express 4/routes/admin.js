const express = require('express');
const router = express.Router();
// under admin/add-product => get
router.get('/add-product',(req,res,next)=>{
    
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">add product</button></form>');
});
// under admin/add-product =>in post request
router.post('/add-product',(req,res,next)=>{
    
    console.log(req.body);
    res.redirect('/');
});
module.exports = router;