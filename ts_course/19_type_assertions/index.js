"use strict";
/*
    - type assertions
    --- sometime compiler doesn't know the information we do
    --- typescript is not performing any check to make sure type assertion is valid
*/
// let myImg = document.getElementById("my-img") as HTMLImageElement
// let myImg = <HTMLImageElement> document.getElementById("my-img")
// console.log(myImg.src);
let data = 1000;
console.log(data.repeat(3));
