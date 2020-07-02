package com.mycompany.teste.oshi;

import java.util.ArrayList;
import java.util.List;
import oshi.SystemInfo;
import oshi.hardware.GlobalMemory;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.software.os.OSProcess;

import oshi.software.os.OperatingSystem;

public class ProcessosMemoria {

    protected static class ProcessosFormat {

        public String nome;
        public Double consumoMemoria;

        public ProcessosFormat(String nome, Double consumoMemoria) {
            this.nome = nome;
            this.consumoMemoria = consumoMemoria;
        }

        public String getNome() {
            return nome;
        }

        public Double getConsumoMemoria() {
            return consumoMemoria;
        }

        @Override
        public String toString() {
            return "ProcessosFormat{" + "nome=" + nome + ", consumoMemoria=" + consumoMemoria + '}';
        }

    }

    @SuppressWarnings("unchecked")
    public static List printProcesses(OperatingSystem os, GlobalMemory memory) {

        List<ProcessosFormat> oshi = new ArrayList();

        List<OSProcess> procs = os.getProcesses(30, OperatingSystem.ProcessSort.MEMORY); //OperatingSystem.ProcessSort.CPU

        for (int i = 0; i < procs.size(); i++) {
            OSProcess p = procs.get(i);

            boolean temNaLista = false;

            for (ProcessosFormat proc : oshi) {
                if (proc.getNome().contains(p.getName().toUpperCase())) {
                    temNaLista = true;
                }

            }
            
            if(!temNaLista){
                oshi.add(new ProcessosFormat(p.getName().toUpperCase(), 100d * p.getResidentSetSize() / memory.getTotal()));
            }
        }

        return oshi;
    }
}
