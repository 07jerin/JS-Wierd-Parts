var a =  3;
console.log(typeof a);

var b =  "Hello";
console.log(typeof b);

var c =  {};
console.log(typeof c);

var d =  [];
console.log(typeof d);
console.log(Object.prototype.toString.call(d));

function Person(name){
    this.name = name;
}

var e  = new Person("Jerin");
console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefined);// undefined
console.log(typeof null); // Returns object --> This is a bug that remains for ever 

var z = function(){}
console.log(typeof z); // function
console.log(Object.prototype.toString.call(z));//[object Function]
