// function 
// - Rest parameter
// - what about float => all is under type number
function addAll() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 0;
    nums.forEach(function (i) { return result += i; });
    // for(let i = 0;i<nums.length;i++){
    //     result += nums[i];
    // }
    return result;
}
console.log(addAll(10, 20, 30, 40, +true));
