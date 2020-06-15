
package com.mycompany.teste.oshi;

import java.awt.BorderLayout;
import java.awt.EventQueue;
import java.awt.Toolkit;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;

public class Icone extends JFrame{
    
    private JPanel contentPanel;
     public static void main(String[] args) {
         EventQueue.invokeLater(new Runnable() {
            public void run() {
                try {
                    Icone frame = new Icone();
                    frame.setVisible(true);
                    frame.setIconImage(Toolkit.getDefaultToolkit().getImage("/home/digital/Desktop/ShadowTech/shadow-tech/back-end/Java-JFrame/teste-oshi/src/main/resources/img-logo.png"));
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });
    }

    public Icone() {
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setBounds(100, 100, 450, 300);
        contentPanel = new JPanel();
        contentPanel.setBorder(new EmptyBorder(5, 5, 5, 5));
        contentPanel.setLayout(new BorderLayout(0, 0));
        setContentPane(contentPanel);
    }
    
}
