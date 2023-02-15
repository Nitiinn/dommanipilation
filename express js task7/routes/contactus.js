
const express = require('express');
const router = express.Router();

const contactuscontroller  = require('../controllers/contactus');


// under admin/add-product => get
router.get('/',contactuscontroller.contactuscontroller);


// under admin/add-product =>in post request
router.post('/contactus', contactuscontroller.postcontactus);
module.exports = router;