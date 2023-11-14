"use strict";
class User {
    static getCount() {
        console.log(`${this.created} Object created`);
    }
    constructor(username) {
        this.username = username;
        User.created++;
    }
}
User.created = 0;
let user1 = new User("mahmoud");
let user2 = new User("Khalid");
let user3 = new User("Omar");
User.getCount();
