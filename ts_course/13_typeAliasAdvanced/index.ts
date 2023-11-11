type Buttons = {
    up: string,
    down: string,
    right: string,
    left: string,
}
type Last = Buttons & {
    x: boolean
}
function getActions(btns: Last){
    console.log(`Action for button up is ${btns.up}`)
    console.log(`Action for button down is ${btns.down}`)
    console.log(`Action for button right is ${btns.right}`)
    console.log(`Action for button left is ${btns.left}`)
}

getActions({up:"Jump",down:"go down",right:"go right",left:"go left",x:true })