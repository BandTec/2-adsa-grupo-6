package com.mycompany.teste.oshi;

import java.time.LocalDateTime;
import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.jdbc.core.JdbcTemplate;
import oshi.SystemInfo;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.software.os.OperatingSystem;

import java.sql.*;
import java.util.List;
import java.util.Map;

public class ConexaoBanco {

    private BasicDataSource dataSource;
    private JdbcTemplate jdbcTemplate;

    Cpu cpu = new Cpu();
    Disco disco = new Disco();
    Ram ram = new Ram();

    SystemInfo si = new SystemInfo();
    HardwareAbstractionLayer hard = si.getHardware();
    OperatingSystem os = si.getOperatingSystem();

    String connectionString;
    Connection conn;

    Integer cont = 0;

    public ConexaoBanco() {

        try {
            //Criando um objeto do tipo BasicDataSource
            dataSource = new BasicDataSource();
            //Passando as strings de conexão 
            dataSource.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            dataSource.setUrl("jdbc:sqlserver://shadowtech.database.windows.net;database=bdshadowtech");
            dataSource.setUsername("adminst");
            dataSource.setPassword("#Gfgrupo6");
        } catch (Exception e) {
            System.out.println("Deu ruim");

        }

//        dataSource = new BasicDataSource();
//        dataSource.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
//        dataSource.setUrl("jdbc:sqlserver://shadowtech.database.windows.net,1433;database=bdshadowtech;Persist Security Info=False;User ID=adminst;Password={#Gfgrupo6};IntegratedSecurity = true;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
//        dataSource.setUsername("192-2a-grupo6@badntec.com.br");
//        dataSource.setPassword("#Gfgrupo6");
        jdbcTemplate = new JdbcTemplate(this.dataSource);;
    }

    public BasicDataSource getDataSource() {
        return dataSource;
    }

    public void inserirComputador() {
        try {

            System.out.println(LocalDateTime.now());

            System.out.println(LocalDateTime.now().getDayOfMonth());
            System.out.println(LocalDateTime.now().getMonthValue());
            System.out.println(LocalDateTime.now().getYear());

            List<Map<String, Object>> mac = jdbcTemplate.queryForList("SELECT mac, idMaquina FROM [dbo].[Computador] where mac ='" + cpu.mostrarMacAddress() + "'");
            
            if(mac.size() == 0){
                jdbcTemplate.update("insert into computador(processador, disco, memoria, mac) values  (?,?,?,?)",
                        cpu.printProcessor(), disco.discoTotal(), ram.getMemoriaTotal(), cpu.mostrarMacAddress());
            }else{
                System.out.println(mac.get(0).get("idMaquina"));
            }
            

        } catch (Exception e) {
            e.printStackTrace();
            
            Log.gravarLog(e);

        }
    }

//    public void incluirRegistros() {
//        try {
//            jdbcTemplate.update("INSERT INTO Registros (cpuPc, memoria, disco, dataHora,fkComputador) VALUES (?,?,?,?,?)",
//                    cpu.getPorcentagemCpu(), ram.getPorcentagemAtual(), disco.discoUsado(), LocalDateTime.now(), "1");
//        } catch (Exception e) {
//            Log.gravarLog(e);
//        }
//    }
//
//    public void incluirProcessos() {
//        try {
//            for (OSProcess process : os.getProcesses()) {
//                jdbcTemplate.update("INSERT INTO Processos (nome, consumo, fkComputador) VALUES (?,?,?)",
//                        process.getName(),
//                        (100d * (process.getKernelTime() + process.getUserTime()) / process.getUpTime()), "1");
//            }
//
//        } catch (Exception e) {
//            Log.gravarLog(e);
//        }
//    }
}
