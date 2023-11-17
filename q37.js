// Define a function called indexOfCharacter that takes a string (str) and a target character (targetChar) as parameters.
function indexOfCharacter(str, targetChar) {
    // Use a for loop to iterate through each character in the input string.
    for (let i = 0; i < str.length; i++) {
        // Check if the character at the current index (i) is equal to the target character.
        if (str[i] === targetChar) {
            // If a match is found, return the current index (i).
            return i;
        }
    }
    // If no match is found after the loop completes, return -1.
    return -1;
}

// Define a string to search for the target character.
const inputString = "abc";

// Define the target character you want to find in the string.
const targetCharacter = "b";

// Call the indexOfCharacter function with the input string and target character.
const result = indexOfCharacter(inputString, targetCharacter);

// Check the result to see if the character was found or not.
if (result !== -1) {
    // If the character is found, log the index where it was found.
    console.log(`The index of '${targetCharacter}' in '${inputString}' is ${result}.`);
} else {
    // If the character is not found, log a message indicating that.
    console.log(`'${targetCharacter}' not found in '${inputString}'.`);
}
