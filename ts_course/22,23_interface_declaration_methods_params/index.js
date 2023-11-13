"use strict";
//  with object
let user = {
    id: 100,
    name: "Mahmoud",
    country: "Egypt",
    sayHello() {
        return `Hello ${this.name}`;
    },
    sayWelcome: () => {
        return `Welcome ${user.name}`;
    },
    getDouble(n) {
        return n * 2;
    }
};
// user.name = "ali"
user.country = "Andalus";
// methods
console.log(user.sayHello());
console.log(user.sayWelcome());
console.log(user.getDouble(5));
// with function
const getData = (data) => {
    console.log(data.id);
    console.log(data.country);
    console.log(data.name);
};
// getData({id: 200, name: "Mahmoud", country: "egypt"});
