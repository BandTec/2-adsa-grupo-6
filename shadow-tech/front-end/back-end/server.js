const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('./controller/user');
const DashController = require('./controller/dash');
const ListUSer = require('./controller/listUser');
const RegisterUser = require('./controller/registersProfile');
const server = express();

// const path = require('path');

var cors = require('cors');
const User = require('./models/user');
server.use(cors())

// server.use('/', express.static(path.reso'lve(__dirname, "public")));

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

server.get('/alunosProcesso', (req, res) => {
    ListUSer.list(req, res);
});

server.get('/processosDoAluno/:idUsuario', (req, res) => {
    ListUSer.processUser(req, res);
});

server.get('/registrosAluno', (req, res) =>{
    RegisterUser.registerProfile(req, res);
});

const port = process.env.port || 3001;
server.listen(port, function() {
    console.log("Servidor rodando na porta " + port);
})