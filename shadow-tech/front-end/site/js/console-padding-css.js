console.log("Começando for");   

for (let i = 0; i < 200; i+=4) {
    console.log(`
    /* 
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                                                        PADDING ${i} PX
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
     */
    .padding-${i}{
        padding:${i}px;
    }
    .padding-top-${i}{
        padding-top:${i}px;
    }
    .padding-right-${i}{
        padding-right:${i}px;
    }
    .padding-bottom-${i}{
        padding-bottom:${i}px;
    }
    .padding-left-${i}{
        padding-left:${i}px;
    }
    `);
    let numero = i;    
};

console.log("Fim for");
