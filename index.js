const express = require('express');
const app = express();
app.set('view engine', 'hbs');
const port = process.env.PORT || 3000;

let hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/index', function(req, res) {
    res.render('index');
});

app.get('/catalogo', function(req, res) {
    res.render('catalogo');
});

app.get('/forgot-password', function(req, res) {
    res.render('forgot-password');
});

app.get('/register', function(req, res) {
    res.render('register');
});

app.get('/list-product', function(req, res) {
    res.render('list-product');
});

app.get('/list-usuarios', function(req, res) {
    res.render('list-usuarios');
});

app.get('/crear-usuarios', function(req, res) {
    res.render('crear-usuarios');
});

app.get('/list-empleados', function(req, res) {
    res.render('list-empleados');
});

app.get('/crear-empleados', function(req, res) {
    res.render('crear-empleados');
});

app.get('/list-clientes', function(req, res) {
    res.render('list-clientes');
});

app.get('/crear-clientes', function(req, res) {
    res.render('crear-clientes');
});

app.get('/list-paquetes', function(req, res) {
    res.render('list-paquetes');
});

app.get('/crear-paquetes', function(req, res) {
    res.render('crear-paquetes');
});

app.get('/list-rutas', function(req, res) {
    res.render('list-rutas');
});

app.get('/crear-rutas', function(req, res) {
    res.render('crear-rutas');
});

app.get('/list-novedades', function(req, res) {
    res.render('list-novedades');
});

app.get('/crear-novedades', function(req, res) {
    res.render('crear-novedades');
});

app.get('/list-entregas', function(req, res) {
    res.render('list-entregas');
});

app.get('/crear-entregas', function(req, res) {
    res.render('crear-entregas');
});

app.get('/dashboard', function(req, res) {
    res.render('dashboard');
});

server = app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});