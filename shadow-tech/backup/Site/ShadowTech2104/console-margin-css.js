console.log("Começando for");   

for (let i = 0; i < 200; i+=4) {
    console.log(`
    /* 
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                                                        MARGIN ${i} PX
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
     */
    .margin-${i}-px{
        margin:${i}px;
    }
    .margin-top-${i}-px{
        margin-top:${i}px;
    }
    .margin-right-${i}-px{
        margin-right:${i}px;
    }
    .margin-bottom-${i}-px{
        margin-bottom:${i}px;
    }
    .margin-left-${i}-px{
        margin-left:${i}px;
    }
    `);
    let numero = i;    
};

console.log("Fim for");
