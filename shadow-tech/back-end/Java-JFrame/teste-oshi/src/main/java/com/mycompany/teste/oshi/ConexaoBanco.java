
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

public class ConexaoBanco {
   private BasicDataSource dataSource;
   private JdbcTemplate jdbcTemplate;
 
    Cpu cpu = new Cpu();
    Disco disco = new Disco();
    Ram ram = new Ram();
    
     SystemInfo si = new SystemInfo();
        HardwareAbstractionLayer hard = si.getHardware();
        OperatingSystem os = si.getOperatingSystem();
    
    Integer cont = 0;   
   public ConexaoBanco(){
       
       dataSource = new BasicDataSource();
       dataSource.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
       dataSource.setUrl("jdbc:shadowtech.database.windows.net");
       dataSource.setUsername("adminst");
       dataSource.setPassword("@Gfgrupo6");
       
       jdbcTemplate = new JdbcTemplate(this.dataSource);
   }
   
//   public List listarTodosComputador(){
//       List<Map<String,Object>> lista = jdbcTemplate.queryForList("SELECT * FROM Computador");
//       return lista;
//   }
   
   public void inserirComputador(){
       try {
       jdbcTemplate.update("INSERT INTO Computador (idMaquina, fkUsuario, processador, disco, memoria, mac) VALUES (?,?,?,?,?,?)",
                            "1", "1", cpu.printProcessor(),disco.discoTotal(),ram.getMemoriaTotal(),cpu.mostrarMacAddress());
           
       } catch (Exception e) {
           Log.gravarLog(e);
       }
   }
   
   
    public void incluirRegistros() {
        try {
            jdbcTemplate.update("INSERT INTO Registros (cpuPc, memoria, disco, dataHora,fkComputador) VALUES (?,?,?,?,?)",
                           cpu.getPorcentagemCpu(), ram.getPorcentagemAtual(), disco.discoUsado(), LocalDateTime.now(),"1"); 
        } catch (Exception e) {
            Log.gravarLog(e);
        }
    }
    
    public void incluirProcessos() {
        try {
           for(OSProcess process : os.getProcesses()){
            jdbcTemplate.update("INSERT INTO Processos (nome, consumo, fkComputador) VALUES (?,?,?)",
                          process.getName(),
                          (100d * (process.getKernelTime() + process.getUserTime()) / process.getUpTime()),"1");
    }
            
        } catch (Exception e) {
            Log.gravarLog(e);
        }
    }

    
}
