var person = {
    firstname: 'jerin'
    , lastname: 'joseph'
    , address: {
        city: 'kottayam'
    }
};

person.address1 = {
    city: 'Pala'
};


function greet(person) {
    console.log("Hi " + person.firstname);
}
console.log(person);
console.log(person.address.city);
console.log(person.address1.city);

greet(person);
greet({
    firstname: 'Dynamic Jerin'
, });

