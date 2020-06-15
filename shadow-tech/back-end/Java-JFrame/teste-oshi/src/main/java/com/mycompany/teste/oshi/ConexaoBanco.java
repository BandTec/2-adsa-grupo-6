
package com.mycompany.teste.oshi;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;

public class ConexaoBanco {
   private BasicDataSource dataSource;
   private JdbcTemplate jdbcTemplate;
 
    Cpu cpu = new Cpu();
    Disco disco = new Disco();
    Ram ram = new Ram();
    
    Integer cont = 0;   
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
       jdbcTemplate.update("INSERT INTO Computador (idMaquina, fkUsuario, processador, disco, memoria, mac) VALUES (?,?,?,?,?,?)",
                            "1", "1", cpu.printProcessor(),disco.printDiscoTotal(),ram.getMemoriaTotal(),cpu.mostrarMacAddress());
   }
   
   
    public void incluirRegistros() { 
        cont ++;
        jdbcTemplate.update("INSERT INTO Registros (cpuPc, memoria, disco, dataHora,fkComputador) VALUES (?,?,?,?,?)",
                           cpu.getPorcentagemCpu(), ram.getPorcentagemAtual(), disco.getPorcentagem(), LocalDateTime.now(),"1");
    }

    
}
