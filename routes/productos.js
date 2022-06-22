const express = require('express');
const router = express.Router();

//const productos = require('../productos');
//const connection = require('../db');
const controller = require('../controllers/productos'); 

router.get('/productos', controller.index);
 
router.get('/productos/:id', controller.show); 
 
 module.exports = router;