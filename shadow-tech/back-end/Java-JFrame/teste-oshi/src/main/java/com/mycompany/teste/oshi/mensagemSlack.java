/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.teste.oshi;

/**
 *
 * @author brain
 */
public class mensagemSlack {
    
    public static void main(String[] args) {
        
      Integer num1 = 1;
        Integer num2 = 2;
        
        if (num1 < num2) {
            SlackMessage slackMessage = SlackMessage.builder()
           .username("ShadowTec") 
           .text("Bem vindo ao Projeto ShadowTech TESTE CINCO")
           .icon_emoji(":canadá:")
           .build();
           SlackUtils.sendMessage(slackMessage);
         } else {
            System.out.println("vai tomar no cu");
        }
    
    }   
}
