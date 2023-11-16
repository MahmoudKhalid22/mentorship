interface Settings {
    theme: boolean,
    font?: string,
    save(): void
}

class User implements Settings {
    constructor(public username:string, public theme: boolean){}
    save():void{
        console.log('saved');
        
    }
    update():void{
        console.log('Updated');
        
    }
}


let userOne = new User("Mahmoud",true);
userOne.save();
userOne.update()