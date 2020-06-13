const database = require('../database/db');

class User {

    list(email, senha) {
        const sql = ` SELECT nome, login, senha FROM Usuario where login = '${email}' and senha = '${senha}'; `;

        return database.query(sql);
    };

    create(name, email, pass) {
        const sql =
        `INSERT INTO Usuario(nome, login, senha) VALUES ("${name}", "${email}", "${pass}");`;

        return database.query(sql);
    };

}

module.exports = User;