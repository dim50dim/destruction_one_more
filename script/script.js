"use strict";
let a = 8888;
console.log(a);
const person = {
    firstName: 'Mike',
    lastName: 'Tyson',
    age: 55,
};
let { firstName, lastName, country = 'US' } = person;
console.log(firstName, lastName, country);
//# sourceMappingURL=script.js.map