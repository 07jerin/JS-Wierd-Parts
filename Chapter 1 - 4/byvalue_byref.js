// By value -- For primitives
var a = 3;
var b;

b= a;
b++;
console.log("A : " +a + " B : " +b);

// By Reference -- Objects

var  c = {greet : 'Greet from c'};
var d = c;
console.log(c);
console.log(d);

d.greet = 'Greet from D';

console.log(c);
console.log(d);



