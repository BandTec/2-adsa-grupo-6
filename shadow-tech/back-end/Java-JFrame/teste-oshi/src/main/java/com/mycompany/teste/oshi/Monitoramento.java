/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.teste.oshi;

import java.awt.event.ActionEvent;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import javax.swing.JFrame;
import javax.swing.JProgressBar;
import javax.swing.Timer;
import oshi.SystemInfo;
import oshi.hardware.GlobalMemory;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.software.os.OSProcess;
import oshi.software.os.OperatingSystem;

/**
 *
 * @author reis
 */
public class Monitoramento extends javax.swing.JFrame {

    private static final long serialVersionUID = 1L;

    Ram ram = new Ram();
    Cpu cpu = new Cpu();
    Disco disco = new Disco();

    SystemInfo info = new SystemInfo();
    HardwareAbstractionLayer hal = info.getHardware();

    GlobalMemory memory = hal.getMemory();
    OperatingSystem os = info.getOperatingSystem();

    ProcessosMemoria processos = new ProcessosMemoria();

    ConexaoBanco con = new ConexaoBanco();
    Integer cont = 0;
    Integer cont_temp = 0;
    Integer cont_cpu = 0;
    Integer cont_cpu_100 = 0;
    Integer cont_porcentagem_boa = 0;

    public Monitoramento() {
        initComponents();

        con.inserirComputador();

        Random random = new Random();
        Double temp;

        pbCpu.setOrientation(JProgressBar.VERTICAL);
        pbRam.setOrientation(JProgressBar.VERTICAL);
        pbDisco.setOrientation(JProgressBar.VERTICAL);

        pbCpu.setMaximum(100);
        pbCpu.setMinimum(0);

        pbRam.setMaximum(100);
        pbRam.setMinimum(0);

        pbDisco.setMaximum(100);
        pbDisco.setMinimum(0);

        lblMac.setText(cpu.mostrarMacAddress());
        lblSO.setText(cpu.mostrarSO());
        lblProcessador.setText(cpu.printProcessor());

        lblTotalRam.setText(String.format("/ %.1f GB", ram.getMemoriaTotal()));
        lblTotalCpu.setText(String.format(" %.2f  GHz", cpu.printFraq()));

        lblDiscoTotal.setText(String.format("%.0f GB", disco.discoTotal()));
        lblDiscoDisponivel.setText(String.format("%.0f GB", disco.discoLivre()));

        List<OSProcess> procs = os.getProcesses(30, OperatingSystem.ProcessSort.MEMORY); //OperatingSystem.ProcessSort.CPU

        Timer timer = new Timer(5, (ActionEvent e) -> {

            List<ProcessosMemoria.ProcessosFormat> oshi = new ArrayList<>();

            oshi = processos.printProcesses(os, memory);
            
            lblP1.setText(oshi.get(0).getNome());
            pb1.setValue(oshi.get(0).getConsumoMemoria().intValue());
            
            lblP2.setText(oshi.get(1).getNome());
            pb2.setValue(oshi.get(1).getConsumoMemoria().intValue());
            
            lblP3.setText(oshi.get(2).getNome());
            pb3.setValue(oshi.get(2).getConsumoMemoria().intValue());
            
            lblP4.setText(oshi.get(3).getNome());
            pb4.setValue(oshi.get(3).getConsumoMemoria().intValue());
            
//            lblP5.setText(oshi.get(4).getNome());
//            pb5.setValue(oshi.get(4).getConsumoMemoria().intValue());

            con.incluirRegistros();

            lblTemperatura.setText(String.format("%.2f °C", cpu.mostrarTemperatura()));

            lblRam.setText(String.format("%.1f GB", ram.getMemoriaTotal()));
            pbRam.setValue(ram.getPorcentagemAtual().intValue());
            lblPorRam.setText(String.format("%d", ram.getPorcentagemAtual().intValue()));
            lblConsumoRam.setText(String.format("%.1f", ram.getMemoriaEmUso()));

            // Condições para os alertas 
            lblPorDisco.setText(String.format(" %.0f ", disco.discoPorcentagem()));
            lblTempDisco.setText(String.format("%.0f / %.0f GB", disco.discoUsado(), disco.discoTotal()));

            lblPorCpu.setText(String.format(" %.0f ", cpu.getPorcentagemCpu()));
            pbCpu.setValue(cpu.getPorcentagemCpu().intValue());

            pbDisco.setValue(disco.discoPorcentagem().intValue());

//            if (cpu.mostrarTemperatura() >= 70.0) {
//                 if (cont == 5) {
//                 SlackMessage slackMessage = SlackMessage.builder()
//                 .text("A temperatura passou de 70%")
//                 .build();
//                 SlackUtils.sendMessage(slackMessage);
//                 cont = 0;
//                 }
//                 cont ++;               
//               }
//                              
//            if (cpu.mostrarTemperatura() >= 90.0) {
//                if (cont_temp == 2) {
//                 SlackMessage slackMessage = SlackMessage.builder()
//                .text("A temperatura passou de 90%")
//                .build();
//                SlackUtils.sendMessage(slackMessage);
//                cont_temp = 0;
//                }
//                cont_temp ++;
//            }
//            
//            // Condição do Mac Address 
//            
//            if (cpu.mostrarMacAddress() == null) {
//                SlackMessage slackMessage = SlackMessage.builder()
//                .text("Não foi encontrando o numero do MacAddress do seu computador!")
//                .build();
//                SlackUtils.sendMessage(slackMessage);
//            }
//            
//            // Condição para a porcentagem do cpu 
//            
//            if (cpu.getPorcentagemCpu() >= 60.0) {
//                if (cont_cpu == 10) {
//                SlackMessage slackMessage = SlackMessage.builder()
//                .text("Não foi encontrando o numero do MacAddress do seu computador!")
//                .build();
//                SlackUtils.sendMessage(slackMessage);
//                cont_cpu = 0;
//                }
//                cont_cpu ++;
//            }
//            
//            if (cpu.getPorcentagemCpu() >= 100.0) {
//                if (cont_cpu_100 == 3) {
//                SlackMessage slackMessage = SlackMessage.builder()
//                .text("Seu Computador esta usando 100% do computador por favor , desligar o computador !!")
//                .build();
//                SlackUtils.sendMessage(slackMessage);
//                cont_cpu_100 = 0;
//                }
//                cont_cpu_100 ++;
//            }
//            
//            if (cpu.getPorcentagemCpu() <= 40.0) {
//                if (cont_porcentagem_boa == 3600) {
//                SlackMessage slackMessage = SlackMessage.builder()
//                .text("Na ultima uma hora a porcentagem do seu computador continoou estavel, parabens :) ")
//                .build();
//                SlackUtils.sendMessage(slackMessage);
//                cont_porcentagem_boa = 0;
//                }
//                cont_porcentagem_boa ++;
//            }
//            
//            
//            
//            // Processador 
//            
//            if (cpu.printProcessor() == null || "".equals(cpu.printProcessor())) {
//                SlackMessage slackMessage = SlackMessage.builder()
//                .text("O processador esta com problema por favor , reiniciar o programa")
//                .build();
//                SlackUtils.sendMessage(slackMessage);
//            }
//            
//            
//            // ram 
//            
//            if (ram.getMemoriaTotal() < ram.getPorcentagemAtual()) {
//                SlackMessage slackMessage = SlackMessage.builder()
//                .text("A sua memoria total esta menor que a meoria atual, algo de errado esta acontecendo !!")
//                .build();
//                SlackUtils.sendMessage(slackMessage);
//            }
//            
//            
//            // disco
//            
//            if (disco.discoTotal() == 0 ) {
//                SlackMessage slackMessage = SlackMessage.builder()
//                .text("O disco esta com 0 disponivel ?")
//                .build();
//                SlackUtils.sendMessage(slackMessage);
//            }
//            
//            if (disco.discoLivre() == 0) {
//                SlackMessage slackMessage = SlackMessage.builder()
//                .text("O disco total esta com 0 disponivel ?")
//                .build();
//                SlackUtils.sendMessage(slackMessage);        
//            }
            con.incluirProcessos();
        }
        );

        timer.setRepeats(true);
        timer.start();
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jLabel9 = new javax.swing.JLabel();
        jLabel5 = new javax.swing.JLabel();
        jLabel7 = new javax.swing.JLabel();
        jLabel2 = new javax.swing.JLabel();
        pbCpu = new javax.swing.JProgressBar();
        jLabel1 = new javax.swing.JLabel();
        pbRam = new javax.swing.JProgressBar();
        jLabel3 = new javax.swing.JLabel();
        pbDisco = new javax.swing.JProgressBar();
        jPanel10 = new javax.swing.JPanel();
        jLabel47 = new javax.swing.JLabel();
        lblSO = new javax.swing.JLabel();
        jLabel49 = new javax.swing.JLabel();
        jLabel50 = new javax.swing.JLabel();
        jLabel51 = new javax.swing.JLabel();
        jLabel52 = new javax.swing.JLabel();
        jLabel53 = new javax.swing.JLabel();
        lblProcessador = new javax.swing.JLabel();
        lblRam = new javax.swing.JLabel();
        lblTemperatura = new javax.swing.JLabel();
        lblMac = new javax.swing.JLabel();
        lblDiscoDisponivel = new javax.swing.JLabel();
        jPanel11 = new javax.swing.JPanel();
        jPanel12 = new javax.swing.JPanel();
        lblP1 = new javax.swing.JLabel();
        pb1 = new javax.swing.JProgressBar();
        jPanel13 = new javax.swing.JPanel();
        lblP2 = new javax.swing.JLabel();
        pb2 = new javax.swing.JProgressBar();
        jPanel14 = new javax.swing.JPanel();
        lblP3 = new javax.swing.JLabel();
        pb3 = new javax.swing.JProgressBar();
        jPanel15 = new javax.swing.JPanel();
        lblP4 = new javax.swing.JLabel();
        pb4 = new javax.swing.JProgressBar();
        jLabel54 = new javax.swing.JLabel();
        lblDiscoTotal = new javax.swing.JLabel();
        jLabel13 = new javax.swing.JLabel();
        jLabel14 = new javax.swing.JLabel();
        jLabel15 = new javax.swing.JLabel();
        jLabel16 = new javax.swing.JLabel();
        jLabel17 = new javax.swing.JLabel();
        jLabel18 = new javax.swing.JLabel();
        jLabel19 = new javax.swing.JLabel();
        jLabel8 = new javax.swing.JLabel();
        jLabel10 = new javax.swing.JLabel();
        jLabel11 = new javax.swing.JLabel();
        jLabel12 = new javax.swing.JLabel();
        lblPorCpu = new javax.swing.JLabel();
        lblTotalCpu = new javax.swing.JLabel();
        jLabel6 = new javax.swing.JLabel();
        lblPorRam = new javax.swing.JLabel();
        jLabel4 = new javax.swing.JLabel();
        lblConsumoRam = new javax.swing.JLabel();
        lblTotalRam = new javax.swing.JLabel();
        lblPorDisco = new javax.swing.JLabel();
        lblTempDisco = new javax.swing.JLabel();
        lblPorDisco1 = new javax.swing.JLabel();

        jLabel9.setText("jLabel9");

        jLabel5.setText("%");

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        getContentPane().setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jLabel7.setFont(new java.awt.Font("Roboto", 0, 36)); // NOI18N
        jLabel7.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        jLabel7.setText("Monitoramento");
        getContentPane().add(jLabel7, new org.netbeans.lib.awtextra.AbsoluteConstraints(86, 128, -1, -1));

        jLabel2.setFont(new java.awt.Font("Roboto", 0, 24)); // NOI18N
        jLabel2.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        jLabel2.setText("CPU");
        getContentPane().add(jLabel2, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 220, 69, -1));

        pbCpu.setForeground(new java.awt.Color(5, 133, 234));
        getContentPane().add(pbCpu, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 320, 75, 207));

        jLabel1.setFont(new java.awt.Font("Roboto", 0, 24)); // NOI18N
        jLabel1.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        jLabel1.setText("RAM");
        getContentPane().add(jLabel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(150, 220, 75, -1));

        pbRam.setForeground(new java.awt.Color(5, 133, 234));
        getContentPane().add(pbRam, new org.netbeans.lib.awtextra.AbsoluteConstraints(150, 320, 75, 207));

        jLabel3.setFont(new java.awt.Font("Arial", 0, 24)); // NOI18N
        jLabel3.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        jLabel3.setText("DISCO");
        getContentPane().add(jLabel3, new org.netbeans.lib.awtextra.AbsoluteConstraints(260, 220, 84, -1));

        pbDisco.setForeground(new java.awt.Color(5, 133, 234));
        getContentPane().add(pbDisco, new org.netbeans.lib.awtextra.AbsoluteConstraints(270, 320, 76, 205));

        jPanel10.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "Especificações", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.DEFAULT_POSITION, new java.awt.Font("Arial", 0, 14))); // NOI18N
        jPanel10.setFont(new java.awt.Font("Roboto", 0, 12)); // NOI18N

        jLabel47.setText("Sistema Operacional:");

        lblSO.setText(".......");

        jLabel49.setText("Processador:");

        jLabel50.setText("Memória RAM");

        jLabel51.setText("Disco Disponível:      ");

        jLabel52.setText("Temperatura:");

        jLabel53.setText("MacAdress:");

        lblProcessador.setText("......");

        lblRam.setText("......");

        lblTemperatura.setText("0.0");

        lblMac.setText("00:00:00:00:00:00");

        lblDiscoDisponivel.setText("......");

        jPanel11.setBorder(javax.swing.BorderFactory.createTitledBorder(null, "Processos", javax.swing.border.TitledBorder.CENTER, javax.swing.border.TitledBorder.DEFAULT_POSITION, new java.awt.Font("Arial", 1, 10))); // NOI18N

        jPanel12.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(0, 0, 0)));

        lblP1.setText("P1");

        pb1.setForeground(new java.awt.Color(54, 65, 86));

        javax.swing.GroupLayout jPanel12Layout = new javax.swing.GroupLayout(jPanel12);
        jPanel12.setLayout(jPanel12Layout);
        jPanel12Layout.setHorizontalGroup(
            jPanel12Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel12Layout.createSequentialGroup()
                .addGap(71, 71, 71)
                .addComponent(lblP1)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 159, Short.MAX_VALUE)
                .addComponent(pb1, javax.swing.GroupLayout.PREFERRED_SIZE, 204, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(30, 30, 30))
        );
        jPanel12Layout.setVerticalGroup(
            jPanel12Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
            .addGroup(jPanel12Layout.createSequentialGroup()
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addGroup(jPanel12Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                    .addComponent(lblP1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(pb1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                .addContainerGap())
        );

        jPanel13.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(0, 0, 0)));

        lblP2.setText("P2");

        pb2.setForeground(new java.awt.Color(54, 65, 86));

        javax.swing.GroupLayout jPanel13Layout = new javax.swing.GroupLayout(jPanel13);
        jPanel13.setLayout(jPanel13Layout);
        jPanel13Layout.setHorizontalGroup(
            jPanel13Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel13Layout.createSequentialGroup()
                .addGap(70, 70, 70)
                .addComponent(lblP2)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addComponent(pb2, javax.swing.GroupLayout.PREFERRED_SIZE, 204, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(30, 30, 30))
        );
        jPanel13Layout.setVerticalGroup(
            jPanel13Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel13Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel13Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                    .addComponent(lblP2, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(pb2, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        jPanel14.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(0, 0, 0)));

        lblP3.setText("P3");

        pb3.setForeground(new java.awt.Color(54, 65, 86));

        javax.swing.GroupLayout jPanel14Layout = new javax.swing.GroupLayout(jPanel14);
        jPanel14.setLayout(jPanel14Layout);
        jPanel14Layout.setHorizontalGroup(
            jPanel14Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel14Layout.createSequentialGroup()
                .addGap(71, 71, 71)
                .addComponent(lblP3)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addComponent(pb3, javax.swing.GroupLayout.PREFERRED_SIZE, 204, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(30, 30, 30))
        );
        jPanel14Layout.setVerticalGroup(
            jPanel14Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel14Layout.createSequentialGroup()
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addGroup(jPanel14Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                    .addComponent(lblP3, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(pb3, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                .addContainerGap())
        );

        jPanel15.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(0, 0, 0)));

        lblP4.setText("P4");

        pb4.setForeground(new java.awt.Color(54, 65, 86));

        javax.swing.GroupLayout jPanel15Layout = new javax.swing.GroupLayout(jPanel15);
        jPanel15.setLayout(jPanel15Layout);
        jPanel15Layout.setHorizontalGroup(
            jPanel15Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel15Layout.createSequentialGroup()
                .addGap(71, 71, 71)
                .addComponent(lblP4)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addComponent(pb4, javax.swing.GroupLayout.PREFERRED_SIZE, 204, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(30, 30, 30))
        );
        jPanel15Layout.setVerticalGroup(
            jPanel15Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel15Layout.createSequentialGroup()
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addGroup(jPanel15Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                    .addComponent(lblP4, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(pb4, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                .addContainerGap())
        );

        javax.swing.GroupLayout jPanel11Layout = new javax.swing.GroupLayout(jPanel11);
        jPanel11.setLayout(jPanel11Layout);
        jPanel11Layout.setHorizontalGroup(
            jPanel11Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel11Layout.createSequentialGroup()
                .addGroup(jPanel11Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jPanel12, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(jPanel13, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(jPanel14, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(jPanel15, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                .addContainerGap())
        );
        jPanel11Layout.setVerticalGroup(
            jPanel11Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel11Layout.createSequentialGroup()
                .addComponent(jPanel12, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(jPanel13, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(jPanel14, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jPanel15, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        jLabel54.setText("Disco Total:");

        lblDiscoTotal.setText("......");

        jLabel13.setIcon(new javax.swing.ImageIcon(getClass().getResource("/processo.png"))); // NOI18N

        jLabel14.setIcon(new javax.swing.ImageIcon(getClass().getResource("/processador.png"))); // NOI18N

        jLabel15.setIcon(new javax.swing.ImageIcon(getClass().getResource("/ram.png"))); // NOI18N

        jLabel16.setIcon(new javax.swing.ImageIcon(getClass().getResource("/salve-.png"))); // NOI18N

        jLabel17.setIcon(new javax.swing.ImageIcon(getClass().getResource("/dvd.png"))); // NOI18N

        jLabel18.setIcon(new javax.swing.ImageIcon(getClass().getResource("/farenheit.png"))); // NOI18N

        jLabel19.setIcon(new javax.swing.ImageIcon(getClass().getResource("/endereco.png"))); // NOI18N

        javax.swing.GroupLayout jPanel10Layout = new javax.swing.GroupLayout(jPanel10);
        jPanel10.setLayout(jPanel10Layout);
        jPanel10Layout.setHorizontalGroup(
            jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel10Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jPanel11, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addGroup(jPanel10Layout.createSequentialGroup()
                        .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(jPanel10Layout.createSequentialGroup()
                                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                    .addGroup(jPanel10Layout.createSequentialGroup()
                                        .addComponent(jLabel13)
                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                        .addComponent(jLabel47))
                                    .addGroup(jPanel10Layout.createSequentialGroup()
                                        .addComponent(jLabel14)
                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                        .addComponent(jLabel49, javax.swing.GroupLayout.PREFERRED_SIZE, 90, javax.swing.GroupLayout.PREFERRED_SIZE))
                                    .addGroup(jPanel10Layout.createSequentialGroup()
                                        .addComponent(jLabel15)
                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                        .addComponent(jLabel50, javax.swing.GroupLayout.PREFERRED_SIZE, 120, javax.swing.GroupLayout.PREFERRED_SIZE))
                                    .addGroup(jPanel10Layout.createSequentialGroup()
                                        .addComponent(jLabel16)
                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                        .addComponent(jLabel51, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)))
                                .addGap(17, 17, 17)
                                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addComponent(lblRam, javax.swing.GroupLayout.PREFERRED_SIZE, 261, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(lblDiscoDisponivel, javax.swing.GroupLayout.PREFERRED_SIZE, 220, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING, false)
                                        .addComponent(lblProcessador, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                        .addGroup(javax.swing.GroupLayout.Alignment.LEADING, jPanel10Layout.createSequentialGroup()
                                            .addGap(1, 1, 1)
                                            .addComponent(lblSO, javax.swing.GroupLayout.PREFERRED_SIZE, 270, javax.swing.GroupLayout.PREFERRED_SIZE)))))
                            .addGroup(jPanel10Layout.createSequentialGroup()
                                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addGroup(jPanel10Layout.createSequentialGroup()
                                        .addComponent(jLabel17)
                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                        .addComponent(jLabel54, javax.swing.GroupLayout.PREFERRED_SIZE, 129, javax.swing.GroupLayout.PREFERRED_SIZE))
                                    .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING, false)
                                        .addGroup(javax.swing.GroupLayout.Alignment.LEADING, jPanel10Layout.createSequentialGroup()
                                            .addComponent(jLabel19)
                                            .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                            .addComponent(jLabel53, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                                        .addGroup(jPanel10Layout.createSequentialGroup()
                                            .addComponent(jLabel18)
                                            .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                            .addComponent(jLabel52, javax.swing.GroupLayout.PREFERRED_SIZE, 115, javax.swing.GroupLayout.PREFERRED_SIZE))))
                                .addGap(18, 18, 18)
                                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addComponent(lblTemperatura, javax.swing.GroupLayout.PREFERRED_SIZE, 131, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(lblMac)
                                    .addComponent(lblDiscoTotal, javax.swing.GroupLayout.PREFERRED_SIZE, 144, javax.swing.GroupLayout.PREFERRED_SIZE))))
                        .addGap(0, 31, Short.MAX_VALUE)))
                .addContainerGap())
        );
        jPanel10Layout.setVerticalGroup(
            jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel10Layout.createSequentialGroup()
                .addContainerGap(22, Short.MAX_VALUE)
                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                        .addComponent(jLabel47, javax.swing.GroupLayout.PREFERRED_SIZE, 32, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addComponent(lblSO, javax.swing.GroupLayout.PREFERRED_SIZE, 32, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addComponent(jLabel13))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jLabel14, javax.swing.GroupLayout.PREFERRED_SIZE, 32, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addGroup(jPanel10Layout.createSequentialGroup()
                        .addGap(8, 8, 8)
                        .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(lblProcessador)
                            .addComponent(jLabel49))))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel10Layout.createSequentialGroup()
                        .addGap(10, 10, 10)
                        .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(jLabel50)
                            .addComponent(lblRam)))
                    .addComponent(jLabel15))
                .addGap(22, 22, 22)
                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                    .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                        .addComponent(jLabel51, javax.swing.GroupLayout.PREFERRED_SIZE, 28, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addComponent(lblDiscoDisponivel))
                    .addComponent(jLabel16, javax.swing.GroupLayout.PREFERRED_SIZE, 0, Short.MAX_VALUE))
                .addGap(18, 18, 18)
                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jLabel17)
                    .addComponent(lblDiscoTotal, javax.swing.GroupLayout.PREFERRED_SIZE, 29, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel54, javax.swing.GroupLayout.PREFERRED_SIZE, 29, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(18, 18, 18)
                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jLabel18)
                    .addGroup(jPanel10Layout.createSequentialGroup()
                        .addGap(9, 9, 9)
                        .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(lblTemperatura)
                            .addComponent(jLabel52))))
                .addGap(18, 18, 18)
                .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addComponent(jLabel19)
                    .addGroup(jPanel10Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                        .addComponent(jLabel53, javax.swing.GroupLayout.PREFERRED_SIZE, 29, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addComponent(lblMac)))
                .addGap(18, 18, 18)
                .addComponent(jPanel11, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(39, 39, 39))
        );

        getContentPane().add(jPanel10, new org.netbeans.lib.awtextra.AbsoluteConstraints(378, 6, 520, 611));

        jLabel8.setIcon(new javax.swing.ImageIcon(getClass().getResource("/codigo (1).png"))); // NOI18N
        getContentPane().add(jLabel8, new org.netbeans.lib.awtextra.AbsoluteConstraints(50, 260, 41, 46));

        jLabel10.setIcon(new javax.swing.ImageIcon(getClass().getResource("/disco.png"))); // NOI18N
        getContentPane().add(jLabel10, new org.netbeans.lib.awtextra.AbsoluteConstraints(290, 260, -1, 40));

        jLabel11.setIcon(new javax.swing.ImageIcon(getClass().getResource("/server.png"))); // NOI18N
        getContentPane().add(jLabel11, new org.netbeans.lib.awtextra.AbsoluteConstraints(170, 270, 41, -1));

        jLabel12.setIcon(new javax.swing.ImageIcon(getClass().getResource("/img-logo.png"))); // NOI18N
        getContentPane().add(jLabel12, new org.netbeans.lib.awtextra.AbsoluteConstraints(184, 34, -1, -1));

        lblPorCpu.setText("0");
        getContentPane().add(lblPorCpu, new org.netbeans.lib.awtextra.AbsoluteConstraints(53, 537, 33, -1));

        lblTotalCpu.setText("0.0");
        lblTotalCpu.setPreferredSize(new java.awt.Dimension(37, 14));
        getContentPane().add(lblTotalCpu, new org.netbeans.lib.awtextra.AbsoluteConstraints(41, 562, 57, 19));

        jLabel6.setText("%");
        getContentPane().add(jLabel6, new org.netbeans.lib.awtextra.AbsoluteConstraints(92, 537, 24, -1));

        lblPorRam.setText("0");
        getContentPane().add(lblPorRam, new org.netbeans.lib.awtextra.AbsoluteConstraints(158, 537, 49, -1));

        jLabel4.setText("%");
        getContentPane().add(jLabel4, new org.netbeans.lib.awtextra.AbsoluteConstraints(213, 537, -1, -1));

        lblConsumoRam.setText("0.0");
        getContentPane().add(lblConsumoRam, new org.netbeans.lib.awtextra.AbsoluteConstraints(140, 560, -1, -1));

        lblTotalRam.setText("/ 0.0 GB");
        getContentPane().add(lblTotalRam, new org.netbeans.lib.awtextra.AbsoluteConstraints(180, 560, -1, -1));

        lblPorDisco.setText("0");
        getContentPane().add(lblPorDisco, new org.netbeans.lib.awtextra.AbsoluteConstraints(279, 537, 30, -1));

        lblTempDisco.setText("0.00");
        getContentPane().add(lblTempDisco, new org.netbeans.lib.awtextra.AbsoluteConstraints(280, 560, 76, 20));

        lblPorDisco1.setText("%");
        getContentPane().add(lblPorDisco1, new org.netbeans.lib.awtextra.AbsoluteConstraints(315, 537, 30, -1));

        pack();
    }// </editor-fold>//GEN-END:initComponents

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Metal".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(Monitoramento.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(Monitoramento.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(Monitoramento.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(Monitoramento.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(() -> {
            try {
                JFrame tela = new Monitoramento();
//                    tela.setIconImage(Toolkit.getDefaultToolkit().getImage("C://Users//Digital Solutions//Desktop//ShadowTech//shadow-tech//front-end//site-react//src//assets//logo.png"));
//                    tela.setIconImage(Toolkit.getDefaultToolkit().getImage("/home/digital/Desktop/ShadowTech/shadow-tech/back-end/Java-JFrame/teste-oshi/src/main/resources/img-logo.png"));
//                    MUDAR O ENDEREÇO DA IMAGEM PARA NÃO BUGAR ESSA PORRA
                tela.setVisible(true);
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
    }


    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel10;
    private javax.swing.JLabel jLabel11;
    private javax.swing.JLabel jLabel12;
    private javax.swing.JLabel jLabel13;
    private javax.swing.JLabel jLabel14;
    private javax.swing.JLabel jLabel15;
    private javax.swing.JLabel jLabel16;
    private javax.swing.JLabel jLabel17;
    private javax.swing.JLabel jLabel18;
    private javax.swing.JLabel jLabel19;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel47;
    private javax.swing.JLabel jLabel49;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JLabel jLabel50;
    private javax.swing.JLabel jLabel51;
    private javax.swing.JLabel jLabel52;
    private javax.swing.JLabel jLabel53;
    private javax.swing.JLabel jLabel54;
    private javax.swing.JLabel jLabel6;
    private javax.swing.JLabel jLabel7;
    private javax.swing.JLabel jLabel8;
    private javax.swing.JLabel jLabel9;
    private javax.swing.JPanel jPanel10;
    private javax.swing.JPanel jPanel11;
    private javax.swing.JPanel jPanel12;
    private javax.swing.JPanel jPanel13;
    private javax.swing.JPanel jPanel14;
    private javax.swing.JPanel jPanel15;
    private javax.swing.JLabel lblConsumoRam;
    private javax.swing.JLabel lblDiscoDisponivel;
    private javax.swing.JLabel lblDiscoTotal;
    private javax.swing.JLabel lblMac;
    private javax.swing.JLabel lblP1;
    private javax.swing.JLabel lblP2;
    private javax.swing.JLabel lblP3;
    private javax.swing.JLabel lblP4;
    private javax.swing.JLabel lblPorCpu;
    private javax.swing.JLabel lblPorDisco;
    private javax.swing.JLabel lblPorDisco1;
    private javax.swing.JLabel lblPorRam;
    private javax.swing.JLabel lblProcessador;
    private javax.swing.JLabel lblRam;
    private javax.swing.JLabel lblSO;
    private javax.swing.JLabel lblTempDisco;
    private javax.swing.JLabel lblTemperatura;
    private javax.swing.JLabel lblTotalCpu;
    private javax.swing.JLabel lblTotalRam;
    private javax.swing.JProgressBar pb1;
    private javax.swing.JProgressBar pb2;
    private javax.swing.JProgressBar pb3;
    private javax.swing.JProgressBar pb4;
    private javax.swing.JProgressBar pbCpu;
    private javax.swing.JProgressBar pbDisco;
    private javax.swing.JProgressBar pbRam;
    // End of variables declaration//GEN-END:variables
}
