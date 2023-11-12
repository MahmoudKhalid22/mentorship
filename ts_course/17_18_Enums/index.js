"use strict";
function getHardLevel() {
    return 3;
}
const KIDS = 15;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3;
var children;
(function (children) {
    children[children["five"] = 25] = "five";
    children[children["seven"] = 20] = "seven";
    children[children["ten"] = 15] = "ten";
})(children || (children = {}));
var level;
(function (level) {
    level[level["kids"] = 20] = "kids";
    level[level["easy"] = 9] = "easy";
    level[level["medium"] = 6] = "medium";
    level[level["hard"] = getHardLevel()] = "hard";
    level[level["Insane"] = 100] = "Insane";
})(level || (level = {}));
let lvl = "easy";
if (lvl === "easy") {
    console.log(`The level is ${lvl} and number of seconds is ${level.hard}`);
}
