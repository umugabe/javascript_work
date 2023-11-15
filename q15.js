// Given an array like this:
// var array = [1,3,4,3,7,8,0,12,19];    
// Create a function to reverse the order of the elements inside the given array.

function reverseArray(arr){

    return arr.reverse();

}
let values = [1,3,4,3,7,8,0,12,19];
let reversedArray = reverseArray(values);
console.log(reversedArray);