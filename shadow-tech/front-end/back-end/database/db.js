const sql = require('mssql');

var config = {
    user: "adminst",
    password: "#Gfgrupo6",
    server: "shadowtech.database.windows.net",
    database: "bdshadowtech",
    options: {
        encrypt: true
    }
}

const query = command => {
    return new Promise((resolve, reject) => {
        sql.connect(config, err => {
            if (err) {
                throw err;
            }

            const request = new sql.Request();
            request.query(command, (err, result) => {
                if (err) reject(err)
                resolve(result)
            })

        });

        sql.on('error', err => {
            console.log('Erro ao conectar no banco de dados ${err}');
        })
    })
}


module.exports = {
    query
}