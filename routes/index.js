const express = require('express');
const router = express.Router();

const productos = require('./productos');

router.get('/', (req, res)=>{
    res.render('index');
});

module.exports = router;