// function 
// - Rest parameter
// - what about float => all is under type number


function addAll(...nums: number[]) :number {
    let result = 0;
    nums.forEach(i => result += i);

    // for(let i = 0;i<nums.length;i++){
    //     result += nums[i];
    // }
    return result;
}


console.log(addAll(10,20,30,40,+true));