abstract class Food {
  constructor(public title: string) {}

  abstract getCookingTime(): void;
}

class Pizza extends Food {
  constructor(public title: string, public price: number) {
    super(title);
  }
  getCookingTime(): void {
    console.log("this item will finish in 30 min");
  }
}

class Burger extends Food {
  constructor(public title: string, public price: number) {
    super(title);
  }
  getCookingTime(): void {
    console.log("this item will finish in 20 min");
  }
}


const pizza1 = new Pizza("awesome pizza",30);

console.log(pizza1.title);
console.log(pizza1.price);
pizza1.getCookingTime()