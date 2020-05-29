/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.teste.oshi;

import java.time.Instant;
import oshi.SystemInfo;
import oshi.hardware.CentralProcessor;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.hardware.NetworkIF;
import oshi.software.os.OperatingSystem;

/**
 *
 * @author reis
 */
public class Cpu {
    
    SystemInfo si = new SystemInfo();
    HardwareAbstractionLayer hal = si.getHardware();
    OperatingSystem os = si.getOperatingSystem();
    
    
    CentralProcessor cpu = hal.getProcessor();
    
  
    private Long cpuTotal = cpu.getMaxFreq();
    
    

    //public Double getCpuTotal() {
       // return cpuTotal / Math.pow(10,9);
    //}
    
    
    
    public String mostrarMacAddress() {        
         
        for (NetworkIF net : hal.getNetworkIFs()) {
            if ("wlan0".equals(net.getName())) {
                return net.getMacaddr();
            }
        }
        
        return "Sem placa de rede";
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
    
    
    
    
    
    
    
    
    
}
