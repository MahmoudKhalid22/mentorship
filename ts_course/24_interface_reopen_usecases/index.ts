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

let userSettings: Settings = {
    theme: true,
    font: "Lato",
    sidebar:false,
    external:true
}

