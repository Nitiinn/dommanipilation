
const express = require('express');
const router = express.Router();
const admincontroller  = require('../controllers/admin');

// under admin/add-product => get
router.get('/add-product',admincontroller.admincontroller);
// under admin/add-product =>in post request


router.post('/add-product',admincontroller.postadmin);
module.exports = router;