
package com.mycompany.teste.oshi;

import java.util.ArrayList;
import java.util.List;
import oshi.SystemInfo;
import oshi.hardware.GlobalMemory;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.software.os.OSProcess;

import oshi.software.os.OperatingSystem;
import oshi.util.FormatUtil;

public class ProcessosMemoria {
    
    public static void main(String[] args) {
        
        SystemInfo info = new SystemInfo();
        HardwareAbstractionLayer hal = info.getHardware();
        GlobalMemory memory = hal.getMemory();
        OperatingSystem op = info.getOperatingSystem();
        List ProcessosMemoria = printProcesses(op, memory);
        System.out.println(ProcessosMemoria);
        ProcessosMemoria.forEach((i) -> {
            System.out.println(i + "\n");
        });
    }
    
 private static List printProcesses(OperatingSystem os, GlobalMemory memory) {

        List oshi = new ArrayList();

        OSProcess myProc = os.getProcess(os.getProcessId());
        
        oshi.add(
                "My PID: " + myProc.getProcessID()+ " with affinity " + Long.toBinaryString(myProc.getAffinityMask()));
        
        oshi.add("Processes: " + os.getProcessCount() + ", Threads: " + os.getThreadCount()+"\n");

        List<OSProcess> procs = os.getProcesses(30, OperatingSystem.ProcessSort.MEMORY);
        
        oshi.add("   PID  %CPU %MEM       VSZ       RSS Name");
        
        for (int i = 0; i < procs.size() && i < 30; i++) {
            OSProcess p = procs.get(i);
            oshi.add(String.format(" %5d %5.1f %4.1f %9s %9s %s", p.getProcessID(),
                    100d * (p.getKernelTime() + p.getUserTime()) / p.getUpTime(),
                    100d * p.getResidentSetSize() / memory.getTotal(), FormatUtil.formatBytes(p.getVirtualSize()),
                    FormatUtil.formatBytes(p.getResidentSetSize()), p.getName()));
        }

        return oshi;
 }
    
}
