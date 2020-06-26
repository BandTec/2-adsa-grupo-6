const database = require('../database/db');

class Alunos {
    processos(){
        const sql = `select distinct(processos.nome), fkMaquina, idUsuario, usuario.nome from [dbo].[UsuarioComputador] 
        inner join [dbo].[Usuario] on idUsuario = fkAluno 
        inner join [dbo].[Processos] on idUsuarioComputador = fkUsuarioComputador`;

        return database.query(sql);
    }

}

module.exports = Alunos;