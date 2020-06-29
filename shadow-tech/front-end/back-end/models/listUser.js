const database = require('../database/db');

class Users {
    processos() {
        const sql = `
            select top 5 idUsuario, usuario.nome, consumo, processos.nome, processos.dataHora 
            from [dbo].[UsuarioComputador] 
            inner join [dbo].[Usuario] on idUsuario = fkAluno 
            inner join [dbo].[Processos] on idUsuarioComputador = fkUsuarioComputador
            where processos.datahora > CONVERT(DATETIME, CONVERT(DATE, GETDATE()))
            order by processos.dataHora desc, consumo asc
        `;

        return database.query(sql);
    }

}

module.exports = Users;