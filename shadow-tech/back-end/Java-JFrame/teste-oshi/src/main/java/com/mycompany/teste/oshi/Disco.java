package com.mycompany.teste.oshi;

import java.util.ArrayList;
import java.util.List;
import oshi.SystemInfo;
import oshi.software.os.FileSystem;
import oshi.software.os.OSFileStore;
import oshi.software.os.OperatingSystem;

public class Disco {
    List<OSFileStore> fileStore;
   
    
    public Disco(){
        SystemInfo sy = new SystemInfo();
        OperatingSystem os = sy.getOperatingSystem();
        FileSystem fileSystem = os.getFileSystem();
        fileStore = fileSystem.getFileStores();
    }
//    private Double usado;
//    private Integer porcentagem;
//    private Integer hdAtual = 0;
//    private Integer hdTotal = fileStore.length;
    
    public Double discoTotal(){
        List<Double> unidades = new ArrayList();
        Double discoTotal = 0.0;
        
        for (OSFileStore fs : fileStore) {
            Long espacoTotal = fs.getTotalSpace();
            Double espacoTotalgb = espacoTotal/Math.pow(1024, 3);
            unidades.add(espacoTotalgb);
        }
        for (Double unidade : unidades) {
            discoTotal += unidade;
        }
        return discoTotal;
    }
    
     public Double discoLivre(){
        List<Double> unidades = new ArrayList();
        Double discoLivre = 0.0;
        
        for (OSFileStore fs : fileStore) {
            Long espacoTotalLivre = fs.getFreeSpace();
            Double espacoLivrelgb = espacoTotalLivre/Math.pow(1024, 3);
            unidades.add(espacoLivrelgb);
        }
        for (Double unidade : unidades) {
            discoLivre += unidade;
        }
        return discoLivre;
    }
     
     public Double discoUsado(){
        List<Double> unidades = new ArrayList();
        Double discoUsado = 0.0;
        
        for (OSFileStore fs : fileStore) {
//            Long espacoUsado = fs.getUsableSpace();
              Long espacoTotal = fs.getTotalSpace();
              Long espacoLivre = fs.getFreeSpace();
            Double espacoUsadogb = (espacoTotal - espacoLivre)/Math.pow(1024, 3);
            unidades.add(espacoUsadogb);
        }
        for (Double unidade : unidades) {
            discoUsado += unidade;
        }
        return discoUsado;
    }
     
     public Double discoPorcentagem() {
         
         return (double)(discoUsado()/ discoTotal()* 100);
     }
}
