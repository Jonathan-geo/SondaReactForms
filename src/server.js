const express = require('express');
const routes = require('./routes/index');
const path = require('path');


//Chama/Inicia a conexão com o DB
require('./database/index')

// Cria a instancia do App
const app = express();



//app.use(express.static(path.join(__dirname, 'public')));


//Routes
app.use(routes);

//Middlewares
app.use(express.json());


// setting port
app.set('port', process.env.POST||3000);


app.listen(app.get('port'), ()=> {
  console.log("App running in 3000!");
})