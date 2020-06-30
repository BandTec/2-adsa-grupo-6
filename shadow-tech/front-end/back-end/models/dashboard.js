const database = require('../database/db');

class Dashboard {
    plotDash() {
        const sql = `
        SELECT
        nome,
        count(fkMaquina) as n
            FROM (
            select 
            fkMaquina, 
            P.nome
            From 
            [dbo].[UsuarioComputador]
            inner join Processos P 
            on idUsuarioComputador = fkUsuarioComputador
            where P.datahora > CONVERT(DATETIME, CONVERT(DATE, DATEADD(HOUR, -3, GETDATE())))
            group by 
            fkMaquina,
            P.nome) as teste    
        Group by nome order by count(fkMaquina) desc 
        
        `;

        return database.query(sql);
    }

}

module.exports = Dashboard;