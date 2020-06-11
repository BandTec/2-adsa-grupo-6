/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.teste.oshi;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;

/**
 *
 * @author brain
 */
public class SlackUtils {
    
    private static String slackWebhookUrl = "https://hooks.slack.com/services/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";
  
      public static void sendMessage(SlackMessage message) {
          CloseableHttpClient client = HttpClients.createDefault();
          HttpPost httpPost = new HttpPost(slackWebhookUrl);
  
          try {
              ObjectMapper objectMapper = new ObjectMapper();
              String json = objectMapper.writeValueAsString(message);
  
              StringEntity entity = new StringEntity(json);
              httpPost.setEntity(entity);
              httpPost.setHeader("Accept", "application/json");
              httpPost.setHeader("Content-type", "application/json");
  
              client.execute(httpPost);
              client.close();
          } catch (IOException e) {
          }
      }


  }