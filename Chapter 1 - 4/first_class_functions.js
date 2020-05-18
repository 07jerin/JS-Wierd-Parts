function greet(){
    console.log("Hi");
}

greet.language = "english";

console.log(greet);
console.log(greet.language);
console.log(greet.name);
console.log(greet.code);

//Output
/*
app.js:7 function greet(){
    console.log("Hi");
}
app.js:8 english
app.js:9 greet -- Name of function
app.js:10 undefined -- code is not accessible !!!

*/