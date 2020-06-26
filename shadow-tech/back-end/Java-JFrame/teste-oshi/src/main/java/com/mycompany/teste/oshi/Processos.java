/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.teste.oshi;

import oshi.SystemInfo;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.software.os.OSProcess;
import oshi.software.os.OperatingSystem;
import oshi.util.FormatUtil;

/**
 *
 * @author brain
 */
public class Processos {
        
   
    
    public static void main(String[] args) {    
        
        SystemInfo si = new SystemInfo();
        HardwareAbstractionLayer hard = si.getHardware();
        OperatingSystem os = si.getOperatingSystem();
        Disco d = new Disco();
        
        Integer processCount = 0; 
        
//        for(OSProcess process : os.getProcesses(5, OperatingSystem.ProcessSort.NEWEST)){
//            //retorna o nome do processo
//            System.out.println("Nome Processo :" + process.getName());
//            
//            //retorna o id do processo
//            System.out.println("Id Processo: " + process.getParentProcessID());
//            
//            //retorna o estado do processo
//            System.out.println("Estado processo: " + process.getState());
//            
//            // retorna o usuario que esta rodando o processo
//            System.out.println("Usuario: " + process.getUser());
//            
//            // retorna a quantidade da cpu consumida pelo processo
//            //ps: se eu não me engano é em porcentagem
//            //precisa usar o String.format('%.1f')
//            System.out.println("Cpu: " + 
//                    (100d * (process.getKernelTime() + process.getUserTime()) 
//                            / process.getUpTime()));
//            
//            //retorna a quantidade usada de memoria em cada processo
//            System.out.println("Memoria: " + FormatUtil.formatBytes(process.getResidentSetSize()));
//            
//            System.out.println("-----");
//        }

//        
//        for (OSProcess process : os.getProcesses(10,OperatingSystem.ProcessSort.MEMORY)) {
//                processCount++;
//                System.out.println("Nome Processo :" + process.getName());
//                System.out.println("Id Processo: " + process.getParentProcessID());
//                System.out.println("Estado processo: " + process.getState());
//                System.out.println("Usuario: " + process.getUser());
//                System.out.println("Cpu: "
//                        + (100d * (process.getKernelTime() + process.getUserTime())
//                                / process.getUpTime()));
//                System.out.println("Memoria: " + FormatUtil.formatBytes(process.getResidentSetSize()));
//                System.out.println("-----");        
//            }        


//             for (OSProcess process : os.getProcess()) {
//                processCount++;
//                System.out.println("Nome Processo :" + process.getName());
//                System.out.println("Id Processo: " + process.getParentProcessID());
//                System.out.println("Estado processo: " + process.getState());
//                System.out.println("Usuario: " + process.getUser());
//                System.out.println("Cpu: "
//                        + (100d * (process.getKernelTime() + process.getUserTime())
//                                / process.getUpTime()));
//                System.out.println("Memoria: " + FormatUtil.formatBytes(process.getResidentSetSize()));
//                System.out.println("-----");        
//            }
        
                for (OSProcess process : os.getProcesses(10, OperatingSystem.ProcessSort.MEMORY)) {;;
                      for(OSProcess processp:os.getChildProcesses(process.getParentProcessID(), 0, null)){
                      System.out.println(processp.getName());
                      System.out.println("Memoria: " + FormatUtil.formatBytes(processp.getResidentSetSize()));
                  }
        }
        }
    }
    

