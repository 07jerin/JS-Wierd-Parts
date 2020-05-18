function call(){
    console.log("No Arg Call");
}

function call(arg){
    console.log("1 Arg Call");
}

function call(arg1, arg2){
    console.log("2 Arg Call");
}

call();
call("A");
call(1,2);
// All 3 calls the last function