const database = require('../database/db');

class Profile {
    processos(idUsuario) {
        const sql = `
            select top 5 idUsuario, fkUsuarioComputador, usuario.nome, consumo, processos.nome, processos.dataHora from [dbo].[UsuarioComputador] 
            inner join [dbo].[Usuario] on idUsuario = ${idUsuario}
            inner join [dbo].[Processos] on idUsuarioComputador = fkUsuarioComputador
            where processos.datahora > CONVERT(DATETIME, CONVERT(DATE, GETDATE()))
            order by processos.dataHora desc, consumo asc
        `;

        return database.query(sql);
    }

}

module.exports = Profile;