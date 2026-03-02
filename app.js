const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

const rutasIndex = require('./routes/index_main.route');
app.use('/', rutasIndex);

const rutasLabs = require('./routes/labs.route');
app.use('/labs', rutasLabs);

app.use((request, response, next) =>{
  response.status(404).send("Laboratorio no encontrado");
})

app.listen(3000);