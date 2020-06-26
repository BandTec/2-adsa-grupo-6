const database = require('../database/db');

class User {

    list(email, senha) {
        const sql = ` SELECT nome, login, senha FROM Professor where login = '${email}' and senha = '${senha}'; `;
        
        return database.query(sql);
    };
    
    create(name, email, pass) {
        const sql =
        `INSERT INTO Professor(nome, login, senha) VALUES ('${name}', '${email}', '${pass}');`;
        
        return database.query(sql);
    };
    
    listEmail(email){
        const sql = ` SELECT login FROM Professor where login = '${email}'; `;
    
        return database.query(sql);
    }

}

module.exports = User;