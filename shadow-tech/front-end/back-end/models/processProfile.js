const database = require('../database/db');

class Profile {
    processos(idUsuario) {
        const sql = `
            select top 5 processos.nome, idUsuario, usuario.nome, consumo,
            PROCESSOS.dataHora
            from Processos inner join UsuarioComputador 
            on idUsuarioComputador = fkUsuarioComputador 
            inner join Usuario on idUsuario = 13
            and UsuarioComputador.datahora > CONVERT(DATETIME, CONVERT(DATE, GETDATE()))
            order by dataHora desc, consumo desc
        `;

        return database.query(sql);
    }

}

module.exports = Profile;