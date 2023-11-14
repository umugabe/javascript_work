function smallestValue(arr){
    return Math.min(...arr);

}
let values = [1,2,6,10,7,20];
let smallest = smallestValue(values);
console.log(smallest);