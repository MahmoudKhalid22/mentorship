class User {
    msg: () => string;
    constructor(private _username:string,protected salary:number, public readonly address: string){
        this.msg = () => {
            return `Hello ${this._username} your salary is ${this.salary} and your address is ${this.address}`
        }
    }

    sayMsg() {
        return `Hello ${this._username} your salary is ${this.salary}`
    }
    get UserName():string{
        return this._username
    }
    set UserName(un:string){
        this._username = un
    }
}

let user1 = new User("Mahmoud Khalid", 15000,"Zankalon");

console.log(user1.UserName);
user1.UserName = "adel";
console.log(user1.UserName);
// console.log(user1.salary);
console.log(user1.msg());
console.log(user1.sayMsg());
