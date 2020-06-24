const ListModel = require('../models/listUser');

const list = async (req, res) =>{

    const listModel = new ListModel();
    
    await listModel.processos()
    .then(function (response) {
        res.status(200).json(response.recordset);
    }).catch( function (error) {
        // res.status(406).send('Usuário não cadastrado! ' + error);
    });
}

module.exports = {
    list
}