class User<T = number> {
    constructor (public value: T){}
    show(msg: T):void{
        console.log(`${msg} - ${this.value}`);
        
    }
}


const user1 = new User<string>("mahmoud")

user1.show("test msg");
const user2 = new User<number | string>(200)

user2.show("this is test 2 uni operator");