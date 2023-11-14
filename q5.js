function sumAllElements(arr){
    var sumElements = 0;
    for(i=0; i<=arr.length-1; i++){
        sumElements += arr[i]; 
    }
    return sumElements;

}
let numbers = [1,2,6,10,7,20];
let arrsum = sumAllElements(numbers);
console.log("The sum of all elements:", arrsum);