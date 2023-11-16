class Player {
    constructor(public name:string){}


    attack():void{
        console.log("Attacking now")
    }
}


class Plane extends Player {
    constructor(name:string, public petrol: number){
        super(name)
    }

    override attack(){
        console.log("bomb now");
        
    }
}
class Tank extends Player {
    constructor(name:string, public petrol: number){
        super(name)
    }

    override attack(){
        console.log("bomb now");
        
    }
}

const plane1 = new Plane("stuka",200);
console.log(plane1.name)
plane1.attack()