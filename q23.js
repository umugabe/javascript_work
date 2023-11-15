// Write a function that checks if a number is odd.

function checkOdd(number){

    if(number%2!==0){
        return("odd");
    }else{
        return("even");
    }
}
let number = 2;
let answer = checkOdd(number);
console.log(answer);