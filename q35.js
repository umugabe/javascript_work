// Write a function that counts the number of vowels in a string.

function countVowels(inputstring){
    var vowels = ["a", "e", "i", "u", "o"];
    var lowercase = inputstring.toLowerCase();
    var vowelcount = 0;
    for (var i = 0; i<lowercase.length; i++){
        if (vowels.includes(lowercase[i])) {
             vowelcount++;
        }
    }
    return vowelcount;
}
console.log(countVowels("alione"));