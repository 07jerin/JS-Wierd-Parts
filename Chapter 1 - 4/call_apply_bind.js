 var person = {
     firstname : "Jerin",
     lastname : "Joseph",
     fullName : function(){
         return this.firstname + ' '+ this.lastname;
     }
 }
 

var  logName = function(){
    console.log(this.fullName())
};

var logName1 = function(lang){
    console.log("Language of " + this.fullName() + " is " + lang);

}

console.log('----------Bind-------------')
var bindedLogName = logName.bind(person);
bindedLogName(); 
var bindedLogName1 = logName1.bind(person, 'en');
bindedLogName1();

console.log('----------CALL-------------');
logName.call(person);
logName1.call(person, 'en');

console.log('----------Apply-------------');
logName.apply(person);
logName1.apply(person, ['en']);


console.log('----------Function borrowing-------------');
var person2 = {
     firstname : "Jerin 2",
     lastname : "Joseph 2"
}

console.log(person.fullName.call(person2));

console.log('----------Function currying-------------');
function multiply(a, b){
    return a*b;
}

var multiplyByTwo = multiply.bind(this, 2); // This set the value of first parameter as 2 permenently
console.log(multiplyByTwo(3));


var multiplyByThree = multiply.bind(this, 3); // This set the value of first parameter as 3 permenently
console.log(multiplyByThree(3));

