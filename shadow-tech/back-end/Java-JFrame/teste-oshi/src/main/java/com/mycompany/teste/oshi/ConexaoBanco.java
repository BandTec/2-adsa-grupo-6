package com.mycompany.teste.oshi;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.jdbc.core.JdbcTemplate;
import oshi.SystemInfo;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.software.os.OSProcess;
import oshi.software.os.OperatingSystem;

import java.sql.*;

public class ConexaoBanco {

    private BasicDataSource dataSource;
    private JdbcTemplate jdbcTemplate;

    Cpu cpu = new Cpu();
    Disco disco = new Disco();
    Ram ram = new Ram();

    SystemInfo si = new SystemInfo();
    HardwareAbstractionLayer hard = si.getHardware();
    OperatingSystem os = si.getOperatingSystem();
    
    String connectionString = null;
    Connection conn = null;

    Integer cont = 0;

    public ConexaoBanco() {

//        dataSource = new BasicDataSource();
//        dataSource.setDriverClassName("com.mysql.jdbc.Driver");
//        dataSource.setUrl("jdbc:mysql://localhost:3306/shadowtec ");
//        dataSource.setUsername("root");
//        dataSource.setPassword("@Bateria2009");

        connectionString = "Server=tcp:shadowtech.database.windows.net,1433;Initial Catalog=bdshadowtech;Persist Security Info=False;User ID=adminst;Password={#Gfgrupo6};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

        try {
            // Establish the connection.
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            conn = DriverManager.getConnection(connectionString);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        
        save();
        
        jdbcTemplate = new JdbcTemplate(this.dataSource);
    }

//   public List listarTodosComputador(){
//       List<Map<String,Object>> lista = jdbcTemplate.queryForList("SELECT * FROM Computador");
//       return lista;
//   }
    
   
    public void save ()
    {
        String nome = "usuario cool";
        String email = "email@cool";
        String senha = "cu";
        
        
        String sql = "Insert into usuario (nome, email, senha) values r"
                            + "values (?, ?, ?)";
        try 
        {
            
            PreparedStatement pstmt=conn.prepareStatement(sql);
            pstmt.setString(1, nome);
            pstmt.setString(2, email);        
            pstmt.setString(3, senha);        
            pstmt.execute();
            pstmt.close();
            
        }catch (SQLException e)
        {
            
            throw new RuntimeException(e);
            
        }
    }
    
    public void inserirComputador() {
        try {
            jdbcTemplate.update("INSERT INTO Computador (idMaquina, fkUsuario, processador, disco, memoria, mac) VALUES (?,?,?,?,?,?)",
                    "1", "1", cpu.printProcessor(), disco.discoTotal(), ram.getMemoriaTotal(), cpu.mostrarMacAddress());

        } catch (Exception e) {
            Log.gravarLog(e);
        }
    }

    public void incluirRegistros() {
        try {
            jdbcTemplate.update("INSERT INTO Registros (cpuPc, memoria, disco, dataHora,fkComputador) VALUES (?,?,?,?,?)",
                    cpu.getPorcentagemCpu(), ram.getPorcentagemAtual(), disco.discoUsado(), LocalDateTime.now(), "1");
        } catch (Exception e) {
            Log.gravarLog(e);
        }
    }

    public void incluirProcessos() {
        try {
            for (OSProcess process : os.getProcesses()) {
                jdbcTemplate.update("INSERT INTO Processos (nome, consumo, fkComputador) VALUES (?,?,?)",
                        process.getName(),
                        (100d * (process.getKernelTime() + process.getUserTime()) / process.getUpTime()), "1");
            }

        } catch (Exception e) {
            Log.gravarLog(e);
        }
    }

}
