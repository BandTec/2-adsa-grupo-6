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
      SlackMessage slackMessage = SlackMessage.builder()
        .username("Admin")
        .text("A memoria passou de 80%")
        .icon_emoji(":sad:")
        .build();
      SlackUtils.sendMessage(slackMessage);
    }
    
    
}
