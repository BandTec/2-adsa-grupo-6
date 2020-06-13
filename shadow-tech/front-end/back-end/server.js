const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('./controller/user');
const server = express();

var cors = require('cors')
server.use(cors())

server.use(bodyParser.json());

server.post('/userLogin', function(req, res) {
    UserController.list(req, res);
});

server.post('/user', function (req, res) {
    UserController.create(req, res);
})

server.post('/listEmail', function (req, res) {
    UserController.listEmail(req, res);
})

const port = 5000
server.listen(port, function() {
    console.log("Servidor rodando na porta " + port);
})