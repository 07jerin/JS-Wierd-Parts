// Create new object using Object.create

var person  = {
    firstName : "Default Fn",
    lastName : "Default Ln",
    nationality : "India",
    greet : function(){
        return "Hi" + this.firstName + " from " + this.nationality;
    }
}



var jerin = Object.create(person);
jerin.firstName = "Jerin";
jerin.lastName = "Joseph";

console.log(jerin.greet());