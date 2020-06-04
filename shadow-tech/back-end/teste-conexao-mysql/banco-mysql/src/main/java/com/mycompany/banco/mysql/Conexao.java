
package com.mycompany.banco.mysql;

import java.util.List;
import java.util.Map;
import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.jdbc.core.JdbcTemplate;

public class Conexao {
    
    private BasicDataSource dataSource;
    private JdbcTemplate jdbcTemplate;
    
    public Conexao(){
        dataSource = new BasicDataSource();
        
        dataSource.setDriverClassName("com.mysql.jdbc.Driver");
        
        dataSource.setUrl("jdbc:mysql://localhost:3306/teste");
        
        dataSource.setUsername("root");
        
        dataSource.setPassword("@Bateria2007");
        
        jdbcTemplate = new JdbcTemplate(this.dataSource);
        
    }
     public List listarTodos(){
        List<Map<String,Object>> lista = jdbcTemplate.queryForList("SELECT * FROM testando");
        return lista;
    }
     public void incluir(){
         jdbcTemplate.update("INSERT INTO testando (nome, cpf) Values (?,?)", "ana","12345678");
     }

    @Override
    public String toString() {
        return "Conexao{" + "dataSource=" + dataSource + ", jdbcTemplate=" + jdbcTemplate + '}';
    }

    public JdbcTemplate getJdbcTemplate() {
        return jdbcTemplate;
    }

    
    public BasicDataSource getDataSource(){
        return dataSource;
    }
    
}
