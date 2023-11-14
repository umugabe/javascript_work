function greatestValue(arr){

    return Math.max(...arr);

}
let values =[1,2,6,10,7,20];
let greatest = greatestValue(values);
console.log("The greatest value is:",greatest);
