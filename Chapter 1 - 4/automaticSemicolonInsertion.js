function getPerson(){
    return  // --> this line get converted to return; with semicolon and the function will return undefined, This semicolon inserion is done by syntax parser
    {
        name : "Jerin" // 
    }
    
}

function getPerson1(){
    return {
        name : "Jerin"
    }
}

console.log(getPerson()); // Undefined due to automatic semi colon insertion by syntax parser
console.log(getPerson1());