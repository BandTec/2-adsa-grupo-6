
package com.mycompany.teste.oshi;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;
import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.jdbc.core.JdbcTemplate;

public class ConexaoBancoLogTeste {

   private BasicDataSource dataSource;
   private JdbcTemplate jdbcTemplate;
 
   public ConexaoBancoLogTeste(){
       
       dataSource = new BasicDataSource();
       dataSource.setDriverClassName("com.mysql.jdbc.Driver");
       dataSource.setUrl("jdbc:mysql://localhost:3306/shadowtec ");
       dataSource.setUsername("root");
       dataSource.setPassword("SenhaErradaParaForçarOCatch");
       
       jdbcTemplate = new JdbcTemplate(this.dataSource);
   }
   
   public void forcarCatch(){
       try {
            jdbcTemplate.update("INSERT INTO Computador (idMaquina, fkUsuario, processador, disco, memoria, mac) VALUES (?,?,?,?,?,?)",
                                 "1", "1", "asfasf",1.0,0.89,"asafasfsa");
       } catch (Exception e) {
                System.out.println(e);
                testeMetodo(e);
       }
   }
   
   public void testeMetodo(Exception e){
       
        Calendar c = Calendar.getInstance();
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/YYYY;HH:mm:ss");  
        LocalDateTime agora = LocalDateTime.now();     
        String teste = dtf.format(agora);
        String [] splitTeste = teste.split(";");  
        
        System.out.println("INÍCIO LOG DIA ");
        System.out.println("TIPO: ERRO DE CONEXÃO DO BANCO");
        System.out.println("DIA: " + splitTeste[0]);
        System.out.println("HORA: " + splitTeste[1]);   
        System.out.println("MENSAGEM");
        System.out.println(e);
        
        System.out.println(String.format("\nID              DESCRICAO             DATA             HORA\n"));
        System.out.println(String.format("%s %30s %15s %10s", "x", "tipo do bag aqui", splitTeste[0], splitTeste[1]));
   
    }

}

