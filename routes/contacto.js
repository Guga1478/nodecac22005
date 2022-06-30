const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const ejs = require('ejs');

const {body, validationResult} = require('express-validator');

router.get('/contacto', (req, res) =>{
    res.render('contacto/index',{values: {}});
});

router.post('/contacto',[
    body('nombre', 'El nombre es obligatorio y tiene que tener mas de 3 caracteres.').exists().isLength(3).escape(), 
    body('email', 'El email es obligatorio y tiene que ser en formato email.').exists().isEmail().normalizeEmail(),
    body('mensaje', 'El mensaje es obligatorio').exists().trim().notEmpty().escape()   
], (req, res)=>{
    const errors = validationResult(req);
    //console.log(req.body, errors);
    if(errors.isEmpty()){
        const transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            secure: false,
            auth:{
                user: '21de79f0068f15' ,
                pass: '1ed492c0d98516'
            }
            
        });
        
        ejs.renderFile(__dirname + '/../views/contacto/correo.ejs', { body: req.body }, (error, html)=>{
            if (error){throw error }
            const options = {
                from: req.body.email,
                to: 'y@y.com',
                subject: 'Nodemailer',
                html: html
            }
            
            transporter.sendMail(options, (error, info) =>{
                if(error){throw error}
                console.log(info);
        });

      
        });

        res.redirect('/');
    }else{
        res.render('contacto/index', {
            values: req.body,
            errors: errors.array()
        });
    }
    });
    

module.exports = router;