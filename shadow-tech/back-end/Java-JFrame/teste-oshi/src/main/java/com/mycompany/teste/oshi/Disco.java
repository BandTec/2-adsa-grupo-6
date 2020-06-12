package com.mycompany.teste.oshi;

import oshi.SystemInfo;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.software.os.FileSystem;
import oshi.software.os.OSFileStore;
import oshi.software.os.OperatingSystem;
import oshi.util.FormatUtil;

public class Disco {

    SystemInfo si = new SystemInfo();
    OperatingSystem os = si.getOperatingSystem();
    FileSystem fileSystem = os.getFileSystem();

    long totalDisponivel = 0;
    long totalTotal = 0;
    Double porcentagem = 0.0;

    
    
    public String printDiscoTotal(){
        totalDisponivel = 0;
        totalTotal = 0;
        porcentagem = 0.0;
       
        OSFileStore[] fsArray = fileSystem.getFileStores();
        for (OSFileStore fs : fsArray) {  
            long disponivel = fs.getUsableSpace();
            long total = fs.getTotalSpace();
                        
            
            if (String.format("%s", fs.getDescription()).equals("Fixed drive")){
                totalDisponivel += disponivel;
                totalTotal += total;
                porcentagem = 100d * disponivel / total; 
                
            }
            else{
                System.out.println("deu merda");
            }
    }
        
        return (String.format("%s", FormatUtil.formatBytes(totalTotal)));
   
    }                
    
    public String printDiscoDisponivel(){
        totalDisponivel = 0;
        totalTotal = 0;
        porcentagem = 0.0;
       
        OSFileStore[] fsArray = fileSystem.getFileStores();
        for (OSFileStore fs : fsArray) {  
            long disponivel = fs.getUsableSpace();
            long total = fs.getTotalSpace();
                        
            
            if (String.format("%s", fs.getDescription()).equals("Fixed drive")){
                totalDisponivel += disponivel;
                totalTotal += total;
                porcentagem = 100d * disponivel / total; 
                
            }
            else{
                System.out.println("deu merda");
            }
    }
        
        return (String.format("%s", FormatUtil.formatBytes(totalDisponivel)));
   
    }

    public Double getPorcentagem() {
        return porcentagem;
    }
    
    
}
