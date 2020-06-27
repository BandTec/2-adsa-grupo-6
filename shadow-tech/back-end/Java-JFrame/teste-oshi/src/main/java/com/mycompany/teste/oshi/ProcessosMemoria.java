package com.mycompany.teste.oshi;

import java.util.ArrayList;
import java.util.List;
import oshi.SystemInfo;
import oshi.hardware.GlobalMemory;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.software.os.OSProcess;

import oshi.software.os.OperatingSystem;

public class ProcessosMemoria {

    @SuppressWarnings("unchecked")
    public static void main(String[] args) {
        SystemInfo info = new SystemInfo();
        HardwareAbstractionLayer hal = info.getHardware();
        GlobalMemory memory = hal.getMemory();
        OperatingSystem op = info.getOperatingSystem();
        List ProcessosMemoria = printProcesses(op, memory);
        ProcessosMemoria.forEach((i) -> {
            System.out.println(i + "\n");
        });
    }

    @SuppressWarnings("unchecked")
    public static List printProcesses(OperatingSystem os, GlobalMemory memory) {

        List oshi = new ArrayList();
        OSProcess myProc = os.getProcess(os.getProcessId());
        List<OSProcess> procs = os.getProcesses(30, OperatingSystem.ProcessSort.MEMORY); //OperatingSystem.ProcessSort.CPU
        oshi.add(" %CPU %MEM   Name");
        for (int i = 0; i < procs.size(); i++) {
            OSProcess p = procs.get(i);
            oshi.add(String.format("%5.1f %2.2f   %s",
                    100d * (p.getKernelTime() + p.getUserTime()) / p.getUpTime(),
                    100d * p.getResidentSetSize() / memory.getTotal(),
                    p.getName()));
        }
        return oshi;
    }
}
