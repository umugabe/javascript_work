
// Create a function that displays a pattern like this:
//       1 
//     1
//   1 
// 1

function pattern(ones){

    for(let i = 0; i < ones; i++){
        var values = " ";
    
        for(let j = ones; j >= i; j--){
            if(i===j){
                values += "1 ";
            }else{
                values += " ";
            }
        }
        console.log(values); 
    }
}
pattern(5);
