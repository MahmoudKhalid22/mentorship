interface User {
    id:number,
    username:string,
    country: string
}

interface Moderator {
    role: string | number
}

interface Admin extends User, Moderator{
    protect: boolean
}

let user: Admin= {
    id:2,
    username:"mahmoud",
    country:"Egypt",
    role:"superadmin",
    protect:true
}