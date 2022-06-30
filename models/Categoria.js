const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db2');

class Categoria extends Model {};
Categoria.init({
    nombre:{
     type: DataTypes.STRING,
     allowNull: false
    //  validate:{
    //      isAlpha:{
    //         args: false,
    //         msg: 'Solo se aceptan letras y numeros'
    //      }
    //  }
    } 
},  {sequelize, modelName: 'categorias'});

module.exports = Categoria;

