/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.teste.oshi;

import java.time.Instant;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Map;
import java.util.stream.Collectors;
import oshi.SystemInfo;
import oshi.hardware.CentralProcessor;
import oshi.hardware.CentralProcessor.TickType;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.hardware.NetworkIF;
import oshi.software.os.OSProcess;
import oshi.software.os.OperatingSystem;
import oshi.util.Util;

/**
 *
 * @author reis
 */
public class Cpu {
    
    SystemInfo si = new SystemInfo();
    HardwareAbstractionLayer hal = si.getHardware();
    OperatingSystem os = si.getOperatingSystem();
    
    
    CentralProcessor cpu = hal.getProcessor();
    
    Double fraq = cpu.getProcessorIdentifier().getVendorFreq() / Math.pow(10, 9);
    
  
    private Long cpuTotal = cpu.getMaxFreq();
    
    

    //public Double getCpuTotal() {
       // return cpuTotal / Math.pow(10,9);
    //}
    
    double porcentagemCpu ;
    
    public Double getPorcentagemCpu(){
        long[] prevTicks = cpu.getSystemCpuLoadTicks();
        
        Util.sleep(1000);  
             
        return porcentagemCpu = cpu.getSystemCpuLoadBetweenTicks(prevTicks) *100;
    }
    
    
    
    
    public String mostrarMacAddress() {        
         
        for (NetworkIF net : hal.getNetworkIFs()) {
            if (null == net.getName()) {
                SlackMessage slackMessage = SlackMessage.builder()
                .text("Não foi encontrado nenhum mac address no seu computador")
                .build();
                SlackUtils.sendMessage(slackMessage);
            } else switch (net.getName()) {
                case "wlan0":
                    return net.getMacaddr();
                case "wlp2s0":
                    return net.getMacaddr();
                default:
                    net.getName();
                    break;
            }
        }
        
        return null;
    }
    
    
    public String  mostrarSO() {
        return (String.valueOf(si.getOperatingSystem())); 
    }
    
    
    public Double mostrarTemperatura() {
        return hal.getSensors().getCpuTemperature();
    }
    
    
    private long[] oldTicks;

    public double cpuData(CentralProcessor proc) {
        double d = proc.getSystemCpuLoadBetweenTicks(oldTicks);
        oldTicks = proc.getSystemCpuLoadTicks();
        return d;
    }   
    
    
    public String printProcessor() {
        return hal.getProcessor().getProcessorIdentifier().getName();
    }
    
    
    
    
    public Double printFraq() {
        return fraq;
    }
    
    
    
    
        
    
}
    
    
    
    
    
    
    

