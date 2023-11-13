

let myObj: {
 readonly username:string,
    id:number,
    hire ?: boolean,
    skills: {
        one: string,
        two: string
    }
} = {
    username:"mahmoud",
    id:1,
    hire:true,
    skills:{
        one:"Reactjs",
        two:"nodejs"
    }
}

// myObj.username = "ali"
myObj.id = 5

console.log(myObj.hire)
console.log(myObj.skills.one)
console.log(myObj.id)