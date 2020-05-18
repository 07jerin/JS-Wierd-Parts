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


for (var prop in jerin){
    console.log( prop + " : " + jerin[prop]);
}

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

jerin.__proto__ = person;

for (var prop in jerin){
    var from = "From Prototype Chain : ";
    if(jerin.hasOwnProperty(prop)){
         from = "From Jerin : ";    
    }
    console.log( from + " " + prop + " : " + jerin[prop] );
}

console.log("---------------------Extend Pattern---------------------------")

var jaisy = {
    firstName:"Jaisy",
    getFirstName : function(){
        return this.firstName;
    },
    getLastName : function(){
        return this.lastName;
    }

}

var combined = _.extend(jerin, jaisy); // Exteend pattern of _ use reflection to search all the properties of objects add them to existing object
console.log(combined);