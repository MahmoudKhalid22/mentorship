"use strict";
/*
    data types
    - void
    --- function that will return nothing
    --- function in js that not return a value will show undefined
    --- undefined is not void
    - never
    --- return type never returns
    --- the function doesn't have a normal completion
    --- it throws an error or never finishes running at all "infinite loop"
*/
function logging(msg) {
    console.log(msg);
    return;
}
console.log(logging("Mahmoud"));
const fail = (msg) => {
    throw new Error(msg);
    // return 10;  //Unreachable code detected.
};
