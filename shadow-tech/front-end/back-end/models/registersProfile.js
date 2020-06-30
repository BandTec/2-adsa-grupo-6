const database = require('../database/db');

class RegisterProfile {
    registros(idUsuario) {
        const sql = `
            select top 1 Registros.cpuPc, Registros.disco, 
            Registros.memoria
            ,Usuario.idUsuario
            from Registros 
            inner join UsuarioComputador 
            on fkUsuarioComputador = idUsuarioComputador
            inner join Usuario on fkAluno = 13
            order by idRegistros desc
        `;

        return database.query(sql);
    }

}

module.exports = RegisterProfile;