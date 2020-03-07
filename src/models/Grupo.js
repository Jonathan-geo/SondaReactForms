const Sequelize = require('sequelize');
var sequelizeConn = require('./database');


var nameTable = 'grupo';

const Grupo = sequelizeConn.define(nameTable, {
    idGrupo: { 
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    grupo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    os: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    cliente: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cnpj:{
        type: Sequelize.STRING,
        allowNull: false,
    },

},  
{ 
    //Remove createdAt and updatedAt
    timestamps: false 
});


module.exports = Grupo;