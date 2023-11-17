// Write a function that checks if a string is a palindrome.

function checkPal(str){

        let value = str.split('').reverse().join('');
        if(str === value){
            return("string is palindrome");
        }else{
            return("not palindrome")
        }
    
}console.log(checkPal("amanaplanacanalpanama"));

