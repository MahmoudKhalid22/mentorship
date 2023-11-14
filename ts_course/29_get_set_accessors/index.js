"use strict";
class User {
    constructor(username, salary, address) {
        this.username = username;
        this.salary = salary;
        this.address = address;
        this.msg = () => {
            return `Hello ${this.username} your salary is ${this.salary} and your address is ${this.address}`;
        };
    }
    sayMsg() {
        return `Hello ${this.username} your salary is ${this.salary}`;
    }
    get UserName() {
        return this.username;
    }
    set UserName(un) {
        this.username = un;
    }
}
let user1 = new User("Mahmoud Khalid", 15000, "Zankalon");
console.log(user1.UserName);
user1.UserName = "adel";
console.log(user1.UserName);
// console.log(user1.salary);
console.log(user1.msg());
console.log(user1.sayMsg());
