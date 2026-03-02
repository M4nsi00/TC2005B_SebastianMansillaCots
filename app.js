const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const rutasVideojuegos = require('./routes/videojuegos.route');
app.use('/videojuegos', rutasVideojuegos);

app.use((request, response, next) =>{
  response.status(404).send("El videojuego no fue encontrado");
})

app.listen(3000);