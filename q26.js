// Write a function that calc ulates the factorial of a number.

function factOfNumber(number){

   if(number===0 || number===1){
    return 1;
 
   }else{

    return number*factOfNumber(number-1);
   
   }

    }
   console.log(factOfNumber(6));
