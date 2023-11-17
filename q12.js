
// Create a function that displays a pattern like this:
// 1 1 1 1 
// 1 1 1 0  
// 1 1 0 0  
// 1 0 0 0  

function pattern(rows){

    for(i=0; i<rows; i++){
        var numbers =" ";

        for(j=0; j<rows; j++){
            if(j<rows-i){

                numbers +="1 ";

            }else{
                numbers +="0 "
            }
            
        }
        console.log(numbers);
    }

}pattern(4);