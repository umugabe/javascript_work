// Write a function that checks if a number is even.

function checkEven(number){

    if(number%2===0){
        return("even");
    }else{
        return("not even");
    }
}
let number = 4;
let answer = checkEven(number);
console.log(answer);