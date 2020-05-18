var a = 1 + 3; // Expression as 1+3 returns value
if (a == 3){} // statement as this does not return a value


// greet(); // Works because of hoisting
// anonymousGreet(); // Does not work as hoising is done on the variable but the function object assignment is not done yet 

 //Function statement
function greet() {
    console.log("Greet Hi");
}

var anonymousGreet = function () { // Function expression.
    console.log("Anonymous Fuction Greet Hi");
}

greet(); 
anonymousGreet();

//Passing a function to another function using anonymous function
var log = return function (fun){
    console.log("Invoke log");
    fun();
}

log(anonymousGreet);



