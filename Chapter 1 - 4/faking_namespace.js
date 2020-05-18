var greet = "Hello";
var greet = "Hola";

console.log(greet);// Always log Hola as we have conflicting names

var english = {greet : "Hello"}; // Objects act as container or fakes the namespace
var spanish = {greet : "Hola"};

console.log(english.greet);
console.log(spanish.greet);

english.special = {greet : "Special Greet" }// Can have nested namespaces too

console.log(english.special.greet);