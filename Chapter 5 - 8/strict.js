//"use strict"

var person;

// If we use strich mode the following code will create an error - [Uncaught ReferenceError: persom is not defined]. else it works
persom = {} // typo error where I set value to undeclared variable persom

console.log(persom);
console.log(person);


function a(){
    //"use strict" // we can use strict mode for a function too.
    var persona;

    persoma = {} // Uncaught ReferenceError: persoma is not defined -- If we use strict mode 

    console.log(persoma);
    console.log(persona);

}

a();

// use strict has to be first line in a function or for a file

// If we 