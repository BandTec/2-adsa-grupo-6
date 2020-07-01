const ListModel = require('../models/listUser');

const list = async (req, res) =>{

    const listModel = new ListModel();
    
    await listModel.processosUsuarios()
    .then(function (response) {
        res.status(200).json(response.recordset);
    }).catch( function (error) {
        res.status(406).send('Sem usuários! ' + error);
    });
}

const processUser = async (req, res) => {
    let idUsuario = req.params.idUsuario;

    console.log(idUsuario);
    

    const listModel = new ListModel();

    await listModel.processosUsuario(idUsuario)
    .then(function (response) {
        res.status(200).json(response.recordset);
    }).catch( function (error) {
        
        res.status(406).send(error);
    });
}

module.exports = {
    list,
    processUser
}