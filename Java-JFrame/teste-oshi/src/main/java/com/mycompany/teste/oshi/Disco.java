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
        System.out.println("\n\nSISTEMA DE ARQUIVOS:");
        System.out.println(String.format("\n Descritor de Arquivo: %d/%d", 
                fileSystem.getOpenFileDescriptors(),
                fileSystem.getMaxFileDescriptors()
            )
        );
        OSFileStore[] fsArray = fileSystem.getFileStores();
        for (OSFileStore fs : fsArray) {  
            long disponivel = fs.getUsableSpace();
            long total = fs.getTotalSpace();
                        
            System.out.println("VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
            if (String.format("%s", fs.getDescription()).equals("Fixed drive")){
                totalDisponivel += disponivel;
                totalTotal += total;
                porcentagem = 100d * disponivel / total; 
                System.out.println("MONTAGEM");
                System.out.println(String.format("%s", fs.getMount()));
                System.out.println("DISPONÍVEL: ");
                System.out.println(String.format("%s", FormatUtil.formatBytes(disponivel)));
                System.out.println("TOTAL: ");
                System.out.println(String.format("%s", FormatUtil.formatBytes(total)));
                System.out.println("PORCENTAGEM DISPONÍVEL: ");
                System.out.println(String.format("%.1f%%", 100d * disponivel / total));
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
        System.out.println("\n\nSISTEMA DE ARQUIVOS:");
        System.out.println(String.format("\n Descritor de Arquivo: %d/%d", 
                fileSystem.getOpenFileDescriptors(),
                fileSystem.getMaxFileDescriptors()
            )
        );
        OSFileStore[] fsArray = fileSystem.getFileStores();
        for (OSFileStore fs : fsArray) {  
            long disponivel = fs.getUsableSpace();
            long total = fs.getTotalSpace();
                        
            System.out.println("VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
            if (String.format("%s", fs.getDescription()).equals("Fixed drive")){
                totalDisponivel += disponivel;
                totalTotal += total;
                porcentagem = 100d * disponivel / total; 
                System.out.println("MONTAGEM");
                System.out.println(String.format("%s", fs.getMount()));
                System.out.println("DISPONÍVEL: ");
                System.out.println(String.format("%s", FormatUtil.formatBytes(disponivel)));
                System.out.println("TOTAL: ");
                System.out.println(String.format("%s", FormatUtil.formatBytes(total)));
                System.out.println("PORCENTAGEM DISPONÍVEL: ");
                System.out.println(String.format("%.1f%%", 100d * disponivel / total));
            }
            else{
                System.out.println("deu merda");
            }
    }
        
        return (String.format("%s", FormatUtil.formatBytes(totalDisponivel)));
   
    }                
}
