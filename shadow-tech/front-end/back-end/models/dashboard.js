const database = require('../database/db');

class Dashboard {
    plotDash(){
        const sql = `select * from Processos group by nome;`;

        return database.query(sql);
    }

}

module.exports = Dashboard;