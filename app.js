const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const rutasUsuarios = require('./routes/user.routes.js');
app.use('/users', rutasUsuarios);

app.use((req,res,next) =>{
  res.locals.username = req.session.username || "";
  next();
});

const rutasIndex = require('./routes/index_main.route');
app.use('/', rutasIndex);

const rutasLabs = require('./routes/labs.route');
app.use('/labs', rutasLabs);

app.use((request, response, next) =>{
  response.status(404).send("Laboratorio no encontrado");
})

app.listen(3000);