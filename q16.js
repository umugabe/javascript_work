
// Given an array like this: 
// var some numbers = [3,4,8,2,1,2,2,6,3,4];
// Create a function to sort and arrange these elements of the array in ascending order.

function arrangeAsc(arr){
    var sortedArray=arr.sort((a, b) => a - b);
    return sortedArray;
}
let numbers = [3,4,8,2,1,2,2,6,3,4];

// Modify the first array to make sure that it will also display the last 3 numbers and the first 3 numbers in front of the sorted array
var displayLastThree = numbers.slice(-3);
var displayFirstThree = numbers.slice(0,3);
console.log(displayFirstThree);
console.log(displayLastThree);


let sortedArray = arrangeAsc(numbers);
console.log(sortedArray);


// From the same sorted array, also display the first 3 numbers.

var displayThree = sortedArray.slice(0,3);
console.log(displayThree);

