"use strict";
class User {
    constructor(value) {
        this.value = value;
    }
    show(msg) {
        console.log(`${msg} - ${this.value}`);
    }
}
const user1 = new User("mahmoud");
user1.show("test msg");
const user2 = new User(200);
user2.show("this is test 2 uni operator");
