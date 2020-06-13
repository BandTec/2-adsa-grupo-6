const mysql = require('mysql');

const query = function (sql) {
    return new Promise(function (resolve, reject) {
        const connection = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '#Gf123456',
            database : 'shadowtec'
        });

        connection.connect();

        connection.query(sql, function (error, results) {
            connection.end();
            if(error) reject(error);
            resolve(results);
        });
    });
};

module.exports = {
    query
}