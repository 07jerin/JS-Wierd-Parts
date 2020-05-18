function greet(fname, lname, lang){
    console.log(fname);
    console.log(lname);
    console.log(lang);
    console.log(arguments);
    
    if(arguments.length > 3){
        console.log("More than 3 arguments")
    }
    console.log('--------------');
}

greet("Jerin"); // We can call js function like this without other values. The other values will be set to undefined.
greet("Jerin", "Joseph");
greet("Jerin", "Joseph", "en");
greet("Jerin", "Joseph", "en", "Xtra" );


//Spread - Work like var args in Java, will hold the additional parameters passed to the function

function greetSpread(name, ...additionalParams){
    console.log(name);
    console.log(arguments);
    console.log(additionalParams);
    console.log('--------------');
}

greetSpread();
greetSpread("Jerin");
greetSpread("Jerin", "1", 2, 3);