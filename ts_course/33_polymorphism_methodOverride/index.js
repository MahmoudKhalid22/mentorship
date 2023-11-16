"use strict";
class Player {
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log("Attacking now");
    }
}
class Plane extends Player {
    constructor(name, petrol) {
        super(name);
        this.petrol = petrol;
    }
    attack() {
        console.log("bomb now");
    }
}
class Tank extends Player {
    constructor(name, petrol) {
        super(name);
        this.petrol = petrol;
    }
    attack() {
        console.log("bomb now");
    }
}
const plane1 = new Plane("stuka", 200);
console.log(plane1.name);
plane1.attack();
