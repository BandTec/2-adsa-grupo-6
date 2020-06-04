	
package com.mycompany.teste.oshi;
  
  import lombok.*;
  
  import java.io.Serializable;
  
/**
 *
 * @author brain
 */
@AllArgsConstructor
  @Builder(builderClassName = "Builder")
  @Getter
  @Setter
  
  
  
  public class SlackMessage implements Serializable {


 
    private String username;
    private String text;
    private String icon_emoji;
    
    
  }