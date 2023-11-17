"use strict";
class Collection {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
}
const booksOne = new Collection();
booksOne.add({
    itemType: "Book",
    title: "Atomic Habits",
    isbn: 4563102
});
booksOne.add({
    itemType: "Book",
    title: "Follow Your Heart",
    isbn: 1234610
});
console.log(booksOne.data);
const gameOne = new Collection();
gameOne.add({
    itemType: "game",
    title: "general",
    style: "strategy",
    price: 100
});
console.log(gameOne.data);
