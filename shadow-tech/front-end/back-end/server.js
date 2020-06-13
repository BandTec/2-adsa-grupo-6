const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('./controller/user');
const DashController = require('./controller/dash');
const server = express();

var cors = require('cors');
const User = require('./models/user');
server.use(cors())

server.use(bodyParser.json());

server.post('/userLogin', (req, res) => {
    UserController.list(req, res);
});

server.post('/user', (req, res) => {
    UserController.create(req, res);
});

server.post('/listEmail', (req, res) => {
    UserController.listEmail(req, res);
});

server.get('/plotDash', (req, res) => {
    DashController.ultimosRegistrosProcessos(req, res);
});

const port = 5000
server.listen(port, function() {
    console.log("Servidor rodando na porta " + port);
})