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
import oshi.software.os.OSProcess;

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
    private Integer idMaquina;
    private Integer idAluno;

    Integer cont = 0;

    public BasicDataSource getDataSource() {
        return dataSource;
    }

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
        jdbcTemplate = new JdbcTemplate(this.dataSource);;
    }

    public void inserirComputador() {
        try {

//            System.out.println(LocalDateTime.now());
//            System.out.println(LocalDateTime.now().getDayOfMonth());
//            System.out.println(LocalDateTime.now().getMonthValue());
//            System.out.println(LocalDateTime.now().getYear());

            List<Map<String, Object>> mac = jdbcTemplate.queryForList("SELECT mac, idMaquina FROM [dbo].[Computador] where mac ='" + cpu.mostrarMacAddress() + "'");
            if (mac.isEmpty()) {
                jdbcTemplate.update("insert into computador(processador, disco, memoria, mac) values  (?,?,?,?)",
                        cpu.printProcessor(), disco.discoTotal(), ram.getMemoriaTotal(), cpu.mostrarMacAddress());
            } else {
                for (Map<String, Object> map : mac) {
                    idMaquina = (Integer) map.get("idMaquina");
                    System.out.println("id maquina inserir computador");
                    System.out.println(idMaquina);
                }
                inserirUsuarioComputador();
            }
        } catch (Exception e) {
            e.printStackTrace();

            Log.gravarLog(e);

        }
    }

    public  void inserirUsuarioComputador() {
        try {
            jdbcTemplate.update("insert into usuarioComputador(fkAluno, fkMaquina) values  (?,?)", idAluno, idMaquina);
            System.out.println("id aluno");
            System.out.println(idAluno);
            System.out.println("id maquin");
            System.out.println(idMaquina);
        } catch (Exception e) {
            
        }
    }
    

    public void incluirProcessos() {
        try {
            for (OSProcess process : os.getProcesses()) {
                jdbcTemplate.update("INSERT INTO Processos (nome, consumo, fkUsuarioComputador) VALUES (?,?,?)",
                        process.getName(),
                        (100d * (process.getKernelTime() + process.getUserTime()) / process.getUpTime()), "1");
            }
        } catch (Exception e) {
            Log.gravarLog(e);
        }
    }
    

    public boolean login(String email, String senha) {
        try {
            List<Map<String, Object>> loginJava = jdbcTemplate.queryForList("SELECT idUsuario,login,senha  FROM [dbo].[Usuario] where login ='" + email + "'" + "and senha = '" + senha + "'");
           
            if (loginJava.size() != 0) {
                for (Map<String, Object> map : loginJava) {               
                    idAluno = (Integer) map.get("idUsuario");
                    System.out.println(idAluno);
                }                
                return true;
            }
            return false;
        } catch (Exception e) {

            e.printStackTrace();
            Log.gravarLog(e);
            return false;
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
}
