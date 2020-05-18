// Mapping in no FP way

var array = [1,2,3];

function doubleArrayValues(arr){
    var tmpArr = [];
    for(var i=0; i<arr.length; i++){
        tmpArr[i] = arr[i] * 2; // Here is the actual logic.
        //tmpArr[i] = arr[i] * 3; // If we wanted to tripple the number
        //tmpArr[i] = arr[i] > 2; // If we wanted to find return an array with boolean results
        // In non functional programming these all needs to be in seperate functions
    }
    return tmpArr;
}

console.log(doubleArrayValues(array))

// Functional Programming

function transform(arr, func){
    var tmpArr = [];
    for(var i=0; i<arr.length; i++){
        tmpArr[i] = func(arr[i]);
    }
    return tmpArr;
}

var doubleArray = transform(array, function(val){
    return val *2;
});

var tripleArray = transform(array, function(val){
    return val * 3;
});

var greaterThanTwoArray = transform(array, function(val){
    return val > 2;
});

console.log(doubleArray);
console.log(tripleArray);
console.log(greaterThanTwoArray);


console.log("---------------------------------------------------------------------------------------------------");

var checkPastLimit = function(limiter, item){
    return item > limiter;
}

var greatedThan1Array = transform(array, checkPastLimit.bind(this, 1));
var greatedThan2Array = transform(array, checkPastLimit.bind(this, 2));

console.log(greatedThan1Array);
console.log(greatedThan2Array);


//More simpler way

var checkPastLimitSimplified = function(limit){
    return function (limiter, item){
        return item > limiter
    }.bind(this, limit);
}

var testSimplified = transform(array, checkPastLimitSimplified(1))
console.log(testSimplified);

console.log("---------------------------------------Underscore.js------------------------------------------------------------");

var doubleArray = _.map(array, function(item){return item * 2});
console.log(doubleArray);

var filteredArray = _.filter([1,2,3,4,5,6,7,8], function(item){return item % 2 === 0});
console.log(filteredArray);
