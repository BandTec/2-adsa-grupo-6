const DashModel = require('../models/dashboard');

const ultimosRegistrosProcessos = async (req, res) =>{
    const dashModel = new DashModel();

    await dashModel.plotDash().then(response =>{
        res.status(200).json(response.recordset);
    }).catch(error => {
        res.status(404).json(error);
        console.log(error);
        
    })
}

module.exports = {
    ultimosRegistrosProcessos
}