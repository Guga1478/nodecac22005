require('dotenv').config();

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect(error => {
    if(error){
     throw error
    }else{
        console.log('Conectado a la Base de Datos!');
   }    
});

module.exports = connection;

// connection.query('SELECT * FROM productos',(error, results)=>{
//     if(error) {throw error}
//     console.log(results);
// });

//connection.destroy();