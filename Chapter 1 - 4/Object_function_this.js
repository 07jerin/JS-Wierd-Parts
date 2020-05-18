function a(){
    console.log(this);
    this.newVariable = "Hello"; // Here value of this is global object
}


var b = function (){
    console.log(this);
}

a();
b();

console.log(newVariable); // new variable is accessible because it was tied to the global object 


var c = {
    name : "C Object",
    log : function(){
        this.name = "New C Object";
        
        var setName = function(newName){
            this.name = newName; // This will not update the name of c object as 'this' keyword in the inner function refers to global object.
        }
        
        setName("Updated C Object");
        console.log(this);
    }
}
c.log();

var d = {
    name : "D Object",
    log : function(){
        var self = this;
        self.name = "New D Object";
        
        
        var setName = function(newName){
            self.name = newName; // slef will be d object
        }
        setName("Updated D Object");
        console.log(self);
    }
}

d.log();