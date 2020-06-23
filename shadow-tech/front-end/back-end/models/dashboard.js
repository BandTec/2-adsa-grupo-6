const database = require('../database/db');

class Dashboard {
    plotDash(){
        const sql = `select count(nome) n, nome from [dbo].[Processos] group by nome order by n desc`;

        return database.query(sql);
    }

}

module.exports = Dashboard;