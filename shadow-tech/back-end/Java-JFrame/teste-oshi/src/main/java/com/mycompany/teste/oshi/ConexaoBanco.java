package com.mycompany.teste.oshi;

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.jdbc.core.JdbcTemplate;
import oshi.SystemInfo;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.software.os.OperatingSystem;

import java.sql.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import oshi.hardware.GlobalMemory;
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

    GlobalMemory memory = hard.getMemory();

    String connectionString;
    Connection conn;
    private Integer idMaquina;
    private Integer idAluno;
    private Integer idUsuarioComputador;

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
            List<Map<String, Object>> mac = jdbcTemplate.queryForList("SELECT mac, idMaquina FROM [dbo].[Computador] where mac ='" + cpu.mostrarMacAddress() + "'");
            if (mac.isEmpty()) {
                jdbcTemplate.update("insert into computador(processador, disco, memoria, mac) values  (?,?,?,?)",
                        cpu.printProcessor(), disco.discoTotal(), ram.getMemoriaTotal(), cpu.mostrarMacAddress());
            } else {
                for (Map<String, Object> map : mac) {
                    idMaquina = (Integer) map.get("idMaquina");
                    System.out.println("id maquina inserir computador");
                    System.out.println(idMaquina);
                    Session.idMaquina = idMaquina;
                }
                inserirUsuarioComputador();
            }
        } catch (Exception e) {
            e.printStackTrace();

            Log.gravarLog(e);

        }
    }

    public void inserirUsuarioComputador() {
        try {

            jdbcTemplate.update("insert into usuarioComputador(fkAluno, fkMaquina, dataHora) values  (?,?,?)", Session.getIdAluno(), Session.getIdMaquina(), LocalDateTime.now());
            List<Map<String, Object>> usuarioComputador = jdbcTemplate.queryForList("select idUsuarioComputador from UsuarioComputador where fkMaquina = ?", Session.getIdMaquina());
           
            for (Map<String, Object> map : usuarioComputador) {
                idUsuarioComputador = (Integer) map.get("idUsuarioComputador");
                Session.idUsuarioComputador = idUsuarioComputador;
            }
        } catch (Exception e) {
            Log.gravarLog(e);
        }
    }

    public void incluirProcessos() {
        try {
            List<OSProcess> procs = os.getProcesses(5, OperatingSystem.ProcessSort.MEMORY); //OperatingSystem.ProcessSort.CPU
            for (int i = 0; i < procs.size(); i++) {
                OSProcess p = procs.get(i);
                jdbcTemplate.update(
                        "INSERT INTO Processos (nome, consumo, fkUsuarioComputador, dataHora) VALUES (?,?,?, ?)",
                        p.getName(),
                       String.format(" %2.0f",(100d * p.getResidentSetSize() / memory.getTotal())), Session.getIdUsuarioComputador(), LocalDateTime.now());
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
                    Session.idAluno = idAluno;
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

        public void incluirRegistros() {
        try {
            jdbcTemplate.update("INSERT INTO Registros (cpuPc, memoria, disco, dataHora,fkUsuarioComputador) VALUES (?,?,?,?,?)",
                    String.format("%.0f",cpu.getPorcentagemCpu()), String.format("%.0f",ram.getPorcentagemAtual()), String.format("%.0f",disco.discoPorcentagem()), LocalDateTime.now(), Session.getIdUsuarioComputador());
        } catch (Exception e) {
            Log.gravarLog(e);
        }
    }
}
