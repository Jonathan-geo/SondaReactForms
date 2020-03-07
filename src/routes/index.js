const express = require('express');
const routes = express.Router();


const GrupoController = require('../controllers/GrupoController');

// ROTA DEFAULT - TESTE
routes.get('/', (req, res) => {
    res.send('WELLCOME');
});


routes.get('/test', GrupoController.test);
routes.get('/testdata', GrupoController.testdata);



module.exports = routes;