// Create a function that calculates the BMI of a person and returns the specific classification of a person according to the height and weight provided by a user.
//     How to calculate Body Mass Index:
//     BMI = weight(kg) / (height(m) x height(m))



// If your BMI is less than 18.5, it falls within the underweight range. 
// If your BMI is 18.5 to <25, it falls within the healthy weight range.
//  If your BMI is 25.0 to <30, it falls within the overweight range. 
// If your BMI is 30.0 or higher, it falls within the obesity range.
function bodyMassIndex(weight, height){
   
    var bodymass = weight / (height * height);

    if(bodymass<18.5){
        return("underweight");
    }else if(bodymass>18.5 && bodymass<25){
        return("healthy weight range");
    }else if(bodymass==25.0 && bodymass<30){
        return("overweight");
    }else if(bodymass>=30.0){
        return("obesity");
    }
    
}
let weight =64;
let height =1.63;
let value = bodyMassIndex(weight, height);
console.log(value);
