"use strict";
const returnTypeArrow = (val) => val;
console.log(returnTypeArrow(5));
console.log(returnTypeArrow([1, 3, 5, 6]));
function testType(val) {
    return `the value is ${val} and the type is ${typeof val}`;
}
console.log(testType(100));
console.log(testType("mahmoud"));
const multiTypes = (valOne, valTwo) => `the value one is ${valOne} and value two is ${valTwo}`;
console.log(multiTypes(100, "mahmoud"));
console.log(multiTypes([1, 2, 4, 5], ["a", "m", "o", "r"]));
