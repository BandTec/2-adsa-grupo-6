const ProcessModel = require('../models/registersProfile');

const registerProfile = async (req, res) =>{
    const processModel = new ProcessModel();
    
    await processModel.registros(req.body.idUsuario)
    .then(function (response) {
        res.status(200).json(response.recordset);
    }).catch( function (error) {
        console.log(error);
    });
}


module.exports = {
    registerProfile
}