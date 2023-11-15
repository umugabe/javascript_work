function patern(rows,columns){
  
    for(let i=1; i<=5; i++){
      var rowsHolder= " ";
      
      for(let j=1; j<=5; j++ ){
        if(i==1||i==5||j==1||j==5){
        
        rowsHolder +=" 1 ";
          
        }
        else{
           rowsHolder +=" 0 ";
         }
      }
       console.log(rowsHolder);
    }
   
  }
  patern(5,4);