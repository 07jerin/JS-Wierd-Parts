// There are in built function constructors in JS

var a = new Number(3);
var name = new String("Jerin");


// The prototype of Number and String function constructors has the additional utility functions

// JS does the boxing of primitives 
//when you try to set or get a property on a primitive it gets boxed into an object
console.log("Jerin".length) // Here primitive string "Jerin" is converted to String and then we use the length function which is present in the prototype of String


// Add new functionality that will be used for all Strings.

String.prototype.isLenghtGreaterThan =function(limit){
        return this.length > limit;
    }   

Number.prototype.isPositive = function(){
    return this > 0;
}

console.log("jerin".isLenghtGreaterThan(2));
console.log("jerin".isLenghtGreaterThan(10));

var num = 5;
console.log(num.isPositive());
//console.log(5.ispositive()); Causes error as this is not autoboxed !!! This is because when we put a . (dot operator) after a number JS thinks we are creating a decimal 5.10
// To get around this we can use
console.log((5).isPositive());