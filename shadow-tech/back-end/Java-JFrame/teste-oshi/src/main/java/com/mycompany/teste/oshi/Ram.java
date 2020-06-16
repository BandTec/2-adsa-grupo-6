/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.teste.oshi;

import java.util.ArrayList;
import java.util.List;
import oshi.SystemInfo;
import oshi.hardware.CentralProcessor;
import oshi.hardware.CentralProcessor.TickType;
import oshi.hardware.GlobalMemory;
import oshi.hardware.HardwareAbstractionLayer;

/**
 *
 * @author rafae
 */
public class Ram {
    SystemInfo si = new SystemInfo();
    HardwareAbstractionLayer hal = si.getHardware();
    
    GlobalMemory ram = hal.getMemory();

    private Double memoriaTotal;
    private Double memoriaEmUso;
    
    public Double getPorcentagemAtual() {  
        return ((getMemoriaEmUso() * 100.0)/getMemoriaTotal());
    }
    
    public Double getMemoriaTotal() {
        return ram.getTotal() / Math.pow(10,9) - 0.6;
    }

    public Double getMemoriaEmUso() {
        return getMemoriaTotal() - ram.getAvailable() / Math.pow(10,9);
    }  
}
