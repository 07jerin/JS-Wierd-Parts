function tellMeWhenDone(callBack){
    console.log("Main Function Completed");
    callBack();
}

tellMeWhenDone(function(){
    console.log("Call Back Function");
});