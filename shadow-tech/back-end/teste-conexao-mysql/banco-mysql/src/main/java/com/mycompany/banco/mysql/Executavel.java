
package com.mycompany.banco.mysql;

import org.springframework.jdbc.core.JdbcTemplate;


public class Executavel {
    
    public static void main(String[] args) {
        
        Conexao con = new Conexao();
        
        JdbcTemplate template = new JdbcTemplate(con.getDataSource());
        
//        con.incluir();
        
        System.out.println(con.listarTodos());
        
        
        
    }
    
}
