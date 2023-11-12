// let all: string | number = 200


type A = {
 one: string,
 two: number,
 three: boolean   
}

type B = A & {
    four: string
}

type C = {
    five: boolean
}
type mix = A & C

function getActions(btns: mix){
    console.log(`Hello ${btns.one}`)
    console.log(`Hello ${btns.two}`)
    console.log(`Hello ${btns.three}`)
    console.log(`Hello ${btns.five}`)
}

getActions({one:"Mahmoud", two:22,three:true,five:false})