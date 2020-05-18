function greet(whatToSay){
    var var1 = "var1";
    var var2 = "var2";
    return function(name){
        console.log(whatToSay + " " + name);
        console.log(var2);
    }
}

greet("Hi")("Jerin"); 

var sayHello = greet("Hello"); // sayHello variable is the returned function of greet
sayHello("Jerin"); // How does the sayHello still know the value of whatToSay -- Its possible because of closures


console.log("---------------------------");


function build(){
    var arr = [];
    for(var i=0; i<3; i++){
        arr.push(function(){
            console.log(i);
            //i++;
        }); 
    }
    return arr;
}

var fs = build();
fs [0](); // 3
fs [1](); // 3
fs [2](); // 3

function build2(){var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(
            (function (j) {  // IIFE 
                return function () {
                    console.log(j);
                }
            }(i))
        );
    } 
return arr;
}

console.log("---------------------------");
var  fs2 = build2();
fs2 [0](); // 0
fs2 [1](); // 1
fs2 [2](); // 2
