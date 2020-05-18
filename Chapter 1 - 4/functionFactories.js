function makeGreeting(lang){
    return function(name){
        
        if(lang =='en'){
            console.log("Hello : " + name );
        }
        
        if(lang =='es'){
            console.log("Hola :  " + name);
        }
    }
}

var greetEn = makeGreeting('en');
var greetEs = makeGreeting('es');

greetEn("Jerin");
greetEs("Jerin");