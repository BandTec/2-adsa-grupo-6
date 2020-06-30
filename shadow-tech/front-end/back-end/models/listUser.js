const database = require('../database/db');

class Users {
    processosUsuarios() {
        const sql = `
        select distinct(idUsuario), usuario.nome, consumo, processos.nome, processos.dataHora 
        from [dbo].[UsuarioComputador] 
        inner join [dbo].[Usuario] on idUsuario = fkAluno 
        inner join [dbo].[Processos] on idUsuarioComputador = fkUsuarioComputador
        where UsuarioComputador.datahora > CONVERT(DATETIME, CONVERT(DATE, DATEADD(HOUR, -3, GETDATE())))
        order by processos.dataHora desc, consumo asc
        `;

        return database.query(sql);
    }

    processosUsuario(idUsuario) {
        const sql = `
        select idUsuario, unome, consumo, pnome
        from
            (select top 5
                processos.nome pnome, idUsuario,
                usuario.nome unome, consumo,
                Processos.dataHora
            from Processos inner join UsuarioComputador
                on idUsuarioComputador = fkUsuarioComputador
                inner join Usuario on idUsuario = 13
                order by
                dataHora desc) as teste
                order by consumo desc
                `
        //where Processos.datahora > CONVERT(DATETIME, CONVERT(DATE, DATEADD(HOUR, -3, GETDATE())))
        // where UsuarioComputador.datahora > CONVERT(DATETIME, CONVERT(DATE, DATEADD(HOUR, -3, GETDATE())))
        return database.query(sql);

    }

}

module.exports = Users;