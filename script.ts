let a : number = 8888
console.log(a);

interface Person{
    firstName : string,
    lastName : string,
    age : number,
    country? : string,
}

const person: Person = {
    firstName: 'Mike',
    lastName : 'Tyson',
    age : 55,
};

let {firstName, lastName,country = 'US'} = person;

console.log(firstName, lastName, country);
