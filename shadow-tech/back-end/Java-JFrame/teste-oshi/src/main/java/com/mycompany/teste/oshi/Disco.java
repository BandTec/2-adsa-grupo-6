package com.mycompany.teste.oshi;

import javax.swing.JOptionPane;
import oshi.SystemInfo;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.software.os.FileSystem;
import oshi.software.os.OSFileStore;
import oshi.software.os.OperatingSystem;
import oshi.util.FormatUtil;

public class Disco {

    SystemInfo sy = new SystemInfo();
    OperatingSystem os = sy.getOperatingSystem();
    FileSystem fileSystem = os.getFileSystem();
    OSFileStore[] fileStore = fileSystem.getFileStores();
    
    private Double usado;
    private Integer porcentagem;
    private Integer hdAtual = 0;
    private Integer hdTotal = fileStore.length;
    

    public Double discoTotal(){
        return (double)fileStore[hdAtual].getTotalSpace() / Math.pow(10,9);
    }
    
    public Double discoLivre(){   
        return (double)fileStore[hdAtual].getFreeSpace() / Math.pow(10, 9);
    }
    
    public Double discoUsado(){
        return (double)(fileStore[hdAtual].getTotalSpace() - 
                fileStore[hdAtual].getFreeSpace()) / Math.pow(10, 9) ;
    }
    
    public Integer discoPorcentagem(){
        Double usado = (double)fileStore[hdAtual].getTotalSpace() 
                     - (double)fileStore[hdAtual].getFreeSpace();
        
        Double total = (double)fileStore[hdAtual].getTotalSpace();
        
        porcentagem = (int)((usado / total)*100);

        return porcentagem;
    }
     
   
    public void paginaProxima(){
        if(hdAtual < hdTotal - 1){
            hdAtual ++;
            
        }else{
            JOptionPane.showMessageDialog(null, 
                    "utlimo HD=Partição.");
        }
    }
    
    public void paginaAnterior(){
        if(hdAtual > 0){
            hdAtual --;
            
        }else{
            JOptionPane.showMessageDialog(null, 
                    "primeirp HD/Partição.");
        }
    }
}
