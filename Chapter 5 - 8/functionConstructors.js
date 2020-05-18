//  New Keyword. AKA Function constructors

function Person (name){
    this.nationality = "Indian",
    console.log(this);
    this.name =  name;
    console.log(this);
    
    // By default when we call a function using the new operator the 
    //1. An empty object is created
    //2. The function gets called the value of this keyword for the execution context of that function gets set to the newly created empty object
    //3. JS engine returns the newly created objet
    
    
     //return {val : 'empty'}; If we retuen something from this function then when we create object using new we get that return value as result.
    
}


var jerin = new Person("Jerin");
console.log(jerin);

Person.prototype.getDetails = function(){
    return this.name + " " + this.nationality;
}


console.log(jerin.getDetails());