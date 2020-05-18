
var name ="Jerin";
// Function statement
function greet(name){
    console.log("Hello from greet : " +name);
}


//Function expressions
var greetFunc = function (name){
    console.log("Hello  from greetFunc : " +name);
    return "Return  from greetFunc : " +name;
};

// This is immediately invoked Function Expresion  
var greetIIFE = function (name){
    console.log("Hello  from greetIIFE : " +name);
    return "Return  from greetIIFE : " +name;
}("Jerin"); // This lines invokes the funcion expression immediately



greet("Jerin");
greetFunc("Jerin");

console.log("----------------------------")

console.log(greetFunc); // This will have the refernce to the fu nction
console.log(greetIIFE); // This will have the return value from the IIFE function

console.log("----------------------------");

//Create a function expression on the fly and invoke it 
(function (name){
    var greeting = "Inside IIFE : "
    console.log(greeting +name);
}(name));