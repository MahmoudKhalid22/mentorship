class User{
    private static created:number = 0;
    static getCount(){
        console.log(`${this.created} Object(s) created`)
    }

    constructor(public username:string){
        User.created++;
    }
}

let user1 = new User("mahmoud");
let user2 = new User("Khalid");
let user3 = new User("Omar");

User.getCount();