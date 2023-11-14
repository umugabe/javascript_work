function average(arr){
    var sum = 0;
    for(i=0; i<arr.length; i++){
        sum = sum+arr[i];
    }
    return sum/arr.length;
}
let numbers = [1,2,6,10,7,20];
let avg = average(numbers);
console.log("The average of all numbers:", avg);