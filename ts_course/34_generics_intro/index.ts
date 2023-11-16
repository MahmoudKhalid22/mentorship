function returnNum(val:number):number{
    return val
}
function returnٍString(val:string):string{
    return val
}
function returnBoolean(val:boolean):boolean{
    return val
}


function returnType<T>(val:T):T{
    return val;
}

returnType<number>(5);
returnType<string>("mahmoud");
returnType<boolean>(true);
returnType<number[]>([1,2,34,5])