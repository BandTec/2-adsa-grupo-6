const ProcessModel = require('../models/processUser');

const profile = async (req, res) =>{
    const processModel = new ProcessModel();
    
    await processModel.processos(req.body.idUsuario)
    .then(function (response) {
        res.status(200).json(response.recordset);
    }).catch( function (error) {
        console.log(error);
        
        // res.status(406).send('Usuário não cadastrado! ' + error);
    });
}

module.exports = {
    profile
}