/** Object  and the Dot **/
var person = new Object();

person["firstname"] = "Jerin";
person["lastname"] = "Joseph";

var firstName = "firstname";
person.addess = "address";
person.addess.street = "Street"; // Here street value is not set as person.addess is primitive and not an object
//person.addess.street.sub = "Street_Sub"; // Cannot set property 'mail' of undefined should use new Object for street
// person.office.mail = "jerin@oracle.com"; // Cannot set property 'mail' of undefined should use new Object for office
console.log(person);
console.log(person[firstName]);
console.log(person.addess);
console.log(person.addess.street); // undefined is the result here as street was not set since address is not an object