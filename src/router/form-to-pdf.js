const { Router }=require('express');
const router=Router();
const path = require('path');
const yourAbsolutePath = path.join( __dirname,'./form');

const { form08pdf } = require('../controllers/form-to-pdf.controller');
router.get('/form/08',form08pdf);

module.exports=router;