const database = require('../database/db');

class Users {
    processosUsuarios() {
        const sql = `
        CREATE TABLE #MaiorProcesso (
            idUsuario INT,
            unome VARCHAR(50),
            consumo DECIMAL(5, 2),
            pnome VARCHAR(50)
        );
        
        DECLARE @cnt INT = 0;
        WHILE @cnt <= (SELECT MAX(idUsuario) FROM USUARIO)
        BEGIN
            insert into #MaiorProcesso
            select usuario.idUsuario, unome, consumo, pnome
            from USUARIO
                inner join
                (select top 1
                    idUsuario, unome, consumo, pnome
                from
                    (select top 5
                        processos.nome pnome, idUsuario,
                        usuario.nome unome, consumo,
                        Processos.dataHora
                    from Processos inner join UsuarioComputador
                        on idUsuarioComputador = fkUsuarioComputador
                        inner join Usuario on idUsuario = fkAluno
                    where idUsuario = @cnt
                    order by
                dataHora desc) as ultimoUsuario
                order by consumo desc) as ultimoProcesso
                on ultimoProcesso.idUsuario = Usuario.idUsuario
            SET @cnt = @cnt + 1
        END
        
        SELECT #MaiorProcesso.idUsuario, #MaiorProcesso.unome, 
        #MaiorProcesso.pnome, #MaiorProcesso.consumo, Usuario.genero 
        FROM #MaiorProcesso join Usuario on #MaiorProcesso.idUsuario = Usuario.idUsuario
        order by unome;
        DROP TABLE #MaiorProcesso;
        
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
                inner join Usuario on idUsuario = fkAluno
                where idUsuario = ${idUsuario}
                order by
                dataHora desc) as teste
                --where teste.datahora > CONVERT(DATETIME, CONVERT(DATE, DATEADD(HOUR, -3, GETDATE())))
                order by consumo desc
                `
                return database.query(sql);

    }

}

module.exports = Users;