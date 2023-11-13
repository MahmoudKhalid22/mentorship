class User {
    u:string;
    s: number;
    msg: () => string;
    constructor(username:string,salary:number){
        this.u = username;
        this.s = salary
        this.msg = () => {
            return `Hello ${this.u} your salary is ${this.s}`
        }
    }

    sayMsg() {
        return `Hello ${this.u} your salary is ${this.s}`
    }
}

let user1 = new User("Mahmoud Khalid", 15000);

console.log(user1.u);
console.log(user1.s);
console.log(user1.msg());
console.log(user1.sayMsg());
