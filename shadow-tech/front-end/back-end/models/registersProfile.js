const database = require('../database/db');

class RegisterProfile {
    registros(idUsuario) {
        const sql = `
            select top 5 idRegistros, Registros.cpuPc, Registros.disco, 
            Registros.memoria
            ,Usuario.idUsuario,
            DATEPART(HOUR, Registros.datahora) hora,
            DATEPART(MINUTE, Registros.datahora) minutos,
            DATEPART(SECOND, Registros.datahora) segundos,
            registros.dataHora
            from Registros 
            inner join UsuarioComputador 
            on fkUsuarioComputador = idUsuarioComputador
            inner join Usuario on fkAluno = idUsuario
            where idUsuario = ${idUsuario}
            order by idRegistros desc
        `;

        return database.query(sql);
    }

}

module.exports = RegisterProfile;