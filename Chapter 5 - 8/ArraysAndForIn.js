var arr = ["Jerin" , "Max"];
for(prop in arr){
    console.log(prop + " : " + arr[prop]);
}

console.log("-------------------------------------");

var arr1 = ["Jerin" , "Max"];

Array.prototype.myCustom = "cool";
Array.prototype.myCustomfunction = function(){
    console.log("Custom Function");
}
arr1.spam = "spam";

for(prop in arr1){
    console.log(prop + " : " + arr1[prop]);
}

console.log("-------------------------------------");
for(var i = 0; i< arr1.length; i++){
    console.log(arr1[i]);
}

