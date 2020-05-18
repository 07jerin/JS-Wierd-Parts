

console.log("------------------ Prototype Chains Chain-----------------");

var obj = {
       
    }

function a(){
    
}

var arr = []

console.log("------------------ Object Chain-----------------");
console.log(obj.__proto__);
console.log(obj.__proto__.__proto__);

console.log("------------------ Function Chain-----------------");
console.log(a.__proto__);
console.log(a.__proto__.__proto__);
console.log(a.__proto__.__proto__.__proto__);

console.log("------------------ Array Chain -----------------");
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);


console.log("------------------ Sample Program-----------------");

var person = {
    
    firstName : "Default FN",
    lastName : "Default LN",
    getFullName : function(){
        return this.firstName + ' ' + this.lastName;
    }
}

var jerin = {
    firstName :"Jerin",
    lastName : "Joseph"
}

var jaisy = {
    firstName : "Jaisy"
}

//DO NOT set the __proto__ value directly, this can cause performance problems
jerin.__proto__ = person;
jaisy.__proto__ = jerin;

console.log(jerin.getFullName());
console.log(jaisy.getFullName());

