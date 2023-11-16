"use strict";
class Food {
    constructor(title) {
        this.title = title;
    }
}
class Pizza extends Food {
    constructor(title, price) {
        super(title);
        this.title = title;
        this.price = price;
    }
    getCookingTime() {
        console.log("this item will finish in 30 min");
    }
}
class Burger extends Food {
    constructor(title, price) {
        super(title);
        this.title = title;
        this.price = price;
    }
    getCookingTime() {
        console.log("this item will finish in 20 min");
    }
}
const pizza1 = new Pizza("awesome pizza", 30);
console.log(pizza1.title);
console.log(pizza1.price);
pizza1.getCookingTime();
