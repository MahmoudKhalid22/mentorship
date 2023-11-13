/* 
if you noticed that interface look very like type alias but 
the difference between them is that you can not duplicate the
identifier in type alias
*/

// Home page
interface Settings {
    readonly theme: boolean,
    font: string
}

// article

interface Settings {
    sidebar: boolean
}

// contact  
interface Settings {
    external: boolean
}


type settings  {
    theme: boolean,
    font: string,
    sidebar: boolean,
    external: boolean
}