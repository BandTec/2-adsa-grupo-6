/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.teste.oshi;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import oshi.SystemInfo;

/**
 *
 * @author digital
 */
public class Log {
    
    public static void gravarLog(Exception e){  
       
        try {
            
            File arqFile = new File("log.txt");
            FileWriter arq = new FileWriter(arqFile.getAbsolutePath(), true);
            BufferedWriter gravarArq = new BufferedWriter(arq);

            gravarArq.write(String.format("\n\n--+--INÍCIO LOG\n"
                                        + "\n     DATA: %s"
                                        + "\n     IPV4: %s"
                                        + "\n     FABRICANTE & MODELO: %s"
                                        + "\n     MENSAGEM: "
                                        + "\n     %s"
                                        + "\n\n--+--FIM LOG\n",
                                        DateTimeFormatter.ofPattern("dd/MM/YYYY  HH:mm:ss").format(LocalDateTime.now()),
                                        new SystemInfo().getOperatingSystem().getNetworkParams().getIpv4DefaultGateway(),
                                        new SystemInfo().getHardware().getComputerSystem().toString(),
                                        e)
            );            

            gravarArq.close();
            
            System.out.println("Arquivo gravado com sucesso");

        } catch (Exception erro) {
            
            erro.printStackTrace();
            System.out.println("Ocorreu um erro ao tentar gravar o arquivo");
            
        }
    }
}
