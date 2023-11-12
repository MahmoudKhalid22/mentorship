/*
    - type assertions
    --- sometime compiler doesn't know the information we do
    --- typescript is not performing any check to make sure type assertion is valid
*/


// let myImg = document.getElementById("my-img") as HTMLImageElement

// let myImg = <HTMLImageElement> document.getElementById("my-img")

// console.log(myImg.src);


let data: any = 1000;

console.log((data as string).repeat(3));
// there is no error in ts but error in running js file because this is number type and repeat is not a function of this type