const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('cac2205','root', 'Amelia2015', {
    host: 'localhost', 
    dialect: 'mysql'
});

module.exports = sequelize; 