const UserModel = require('../models/user');

const create = async (req, res) =>{
    let { nome, email, senha} = req.body;    

    const userModel = new UserModel();
    
    await userModel.create(nome, email, senha)
    .then(function (response) {
        res.status(201).send('Usuário criado com sucesso! ');
    }).catch( function (error) {
        res.status(406).send('Usuário não cadastrado! ' + error);
    });
}

const list = async (req, res) => {
    let { email, senha } = req.body;
    
    const userModel = new UserModel();
    
    await userModel.list(email, senha)
    .then(function (response) {
        if(response[0] != undefined){
            res.status(200).json(response);
        }else{
            res.status(404).json(response);
        }
    }).catch( function (error) {
        res.status(500).send('Conexão!' + error);
    });
    
}

const listEmail = async (req, res) => {
    let { email } = req.body;
    
    const userModel = new UserModel();

    await userModel.listEmail(email)
    .then(function (response) {
        if(response[0] != undefined){
            res.status(200).json(response);
        }else{
            res.status(404).json(response);
        }
    }).catch( function (error) {
        res.status(500).send('Conexão!' + error);
    });
    
}


module.exports = {
    create,
    list,
    listEmail
}