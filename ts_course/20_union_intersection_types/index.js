"use strict";
// let all: string | number = 200
function getActions(btns) {
    console.log(`Hello ${btns.one}`);
    console.log(`Hello ${btns.two}`);
    console.log(`Hello ${btns.three}`);
    console.log(`Hello ${btns.five}`);
}
getActions({ one: "Mahmoud", two: 22, three: true, five: false });
