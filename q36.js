// Write a function that counts the number of consonants in a string.

function countConsonants(inputstring){

    let count =0;
    var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
    var lowercase = inputstring.toLowerCase();

    for(i=0; i<=lowercase.length; i++){
        if(consonants.includes(lowercase[i])){
            count ++;
        }
    }
    return count;
}console.log(countConsonants("ELYSE"));