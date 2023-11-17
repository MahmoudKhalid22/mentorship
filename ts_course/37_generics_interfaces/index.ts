interface Book {
  itemType: string;
  title: string;
  isbn: number;
}
interface Game {
  itemType: string;
  title: string;
  style: string;
  price: number;
}

class Collection<T> {
  public data: T[] = [];
  add(item: T): void {
    this.data.push(item);
  }
}


const booksOne = new Collection<Book>();


booksOne.add({
    itemType:"Book",
    title: "Atomic Habits",
    isbn:4563102    
})
booksOne.add({
    itemType:"Book",
    title: "Follow Your Heart",
    isbn:1234610    
})

console.log(booksOne.data);


const gameOne = new Collection<Game>();

gameOne.add({
   itemType: "game",
   title:"general",
   style:"strategy",
   price: 100

})

console.log(gameOne.data);
