class User {
    // private username:string;
    // protected salary: number;
    msg: () => string;
    constructor(private username:string,protected salary:number, public readonly address: string){
        // this.username = username;
        // this.salary = salary
        this.msg = () => {
            return `Hello ${this.username} your salary is ${this.salary} and your address is ${this.address}`
        }
    }

    sayMsg() {
        return `Hello ${this.username} your salary is ${this.salary}`
    }
}

let user1 = new User("Mahmoud Khalid", 15000, "Zankalon");

// console.log(user1.username);
// console.log(user1.salary);
console.log(user1.msg());
console.log(user1.sayMsg());
