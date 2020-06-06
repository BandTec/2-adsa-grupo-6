
package com.mycompany.teste.oshi;

import java.util.List;
import java.util.Map;
import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.jdbc.core.JdbcTemplate;

public class ConexaoBanco {
   private BasicDataSource dataSource;
   private JdbcTemplate jdbcTemplate;
   
    Cpu cpu = new Cpu();
    Disco disco = new Disco();
    Ram ram = new Ram();
   
   public ConexaoBanco(){
       
       dataSource = new BasicDataSource();
       dataSource.setDriverClassName("com.mysql.jdbc.Driver");
       dataSource.setUrl("jdbc:mysql://localhost:3306/shadowtec ");
       dataSource.setUsername("root");
       dataSource.setPassword("@Bateria2007");
       
       jdbcTemplate = new JdbcTemplate(this.dataSource);
   }
   
   public List listarTodosComputador(){
       List<Map<String,Object>> lista = jdbcTemplate.queryForList("SELECT * FROM Computador");
       return lista;
   }
   
   public void inserirComputador(){
       jdbcTemplate.update("INSERT INTO Computador (idMaquina, processador, disco, memoria, mac) VALUES (?,?,?,?,?)",
                            "1", cpu.printProcessor(),disco.printDiscoTotal(),ram.getMemoriaTotal(),"mac");
   }
}
