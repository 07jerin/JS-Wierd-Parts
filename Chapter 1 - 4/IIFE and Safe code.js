(function greet(window, name){
    var greet = "Hello : ";
    window.name = "John";
    console.log(greet + name);
}(window,"Jerin")) // We can pass global object into IIFE as arguments


console.log(name);