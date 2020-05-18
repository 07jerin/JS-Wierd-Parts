var arr = [1, 2,3];
// Js Array can hold multiple type values as js is dynamically typed lang
var arr1 = [1,
            2,
            3,
            false,
            function(name){
                console.log(name);
            },
            {
                name : 'Jerin'
            }
           
           ];

console.log(arr);
console.log(arr1);
arr1[4](arr1[5].name);