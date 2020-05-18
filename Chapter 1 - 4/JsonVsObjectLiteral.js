
var obj = {name : "Jerin" , age : "27"}; // Object Literal
var obj1 = {"name" : "Jerin" , "age" : "27"}; // Also valid object literal

var jsonString ='{"name":"Jerin","age":"27"}'; // JSON all properties should be enclosed in ""

console.log(JSON.stringify(obj));
console.log(JSON.parse(jsonString));