"use strict";
class User {
    constructor(username, theme) {
        this.username = username;
        this.theme = theme;
    }
    save() {
        console.log('saved');
    }
    update() {
        console.log('Updated');
    }
}
let userOne = new User("Mahmoud", true);
userOne.save();
userOne.update();
