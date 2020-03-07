var Sequelize = require('sequelize');
const dbConfig  =  require('../config/database');
// Criando conexão com a base
//OBS config do database está em config/databese
const sequelizeConn = new Sequelize(dbConfig);


module.exports = sequelizeConn;