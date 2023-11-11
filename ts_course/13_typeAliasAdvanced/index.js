function getActions(btns) {
    console.log("Action for button up is ".concat(btns.up));
    console.log("Action for button down is ".concat(btns.down));
    console.log("Action for button right is ".concat(btns.right));
    console.log("Action for button left is ".concat(btns.left));
}
getActions({ up: "Jump", down: "go down", right: "go right", left: "go left", x: true });
