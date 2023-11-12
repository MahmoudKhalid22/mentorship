/*
    data types

    - Enums => enumerations
    --- allows us to declare a set of named constants
    --- used for logical grouping collection of constants "collection of related values"
    --- it organizes your code
    --- by default Enums are number-based, first element is 0
    --- there is a numeric Enums
    --- there is string-based Enums
    --- there is Heterogeneous Enums [String + Number]
*/

function getHardLevel():number{
    return 3;
}


const KIDS = 15;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3;


enum children {
    five = 25,
    seven = 20,
    ten = 15
}

enum level {
    kids = children.seven,
    easy = 9,
    medium = 6,    
    hard = getHardLevel(),
    Insane = 100,
}

let lvl: string = "easy";


if(lvl === "easy"){
    console.log(`The level is ${lvl} and number of seconds is ${level.hard}`)
}