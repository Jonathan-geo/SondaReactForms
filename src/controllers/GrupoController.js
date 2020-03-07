const controllers = {}

//Import models and sequelize
var sequelize = require('../models/database'); //Import sequelizeConn
var Grupo = require('../models/Grupo');  //Import model Grupo

controllers.testdata = async ( req, res) => {
    const response = await sequelize.sync().then(function(){
        const data = Grupo.findAll()
        return data;
    })
    .catch(error => {
        return error;
    });

    res.json({success : true, data : response});
}

controllers.test = ( req, res) => {
    const data = {
        name: "John Smith",
        age: 24
    }
    console.log("Execute OK")
    res.json(data);
}

module.exports = controllers;


