function showData(name: string,age: number,country?: string){
    return `${name} - ${age} - ${country}`;
}


console.log(showData("Mahmoud",22));

// A required parameter cannot follow an optional parameter.ts(1016)