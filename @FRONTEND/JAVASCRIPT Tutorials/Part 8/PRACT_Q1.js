let nums = [1, 2, 34, 5, 6, 5, 4, 33, 3];
console.log("Max no by using reduce()")
let max = nums.reduce((res, el) => {
    if (res > el) {
        return res;
    } else {
        return el;
    }
})
console.log(max);
console.log("Min no by using reduce()")
let min = nums.reduce((res, el) => {
    if (res < el) {
        return res;
    } else {
        return el;
    }
})
console.log(min);
console.log("every();")
let ex = [10, 20, 30, 40, 50];
let isdiv = ex.every((el) => (el % 10 == 0))
console.log(isdiv);

let double = ex.map(function (el) {
    return el * 2;
})
console.log(double);
let even = nums.filter((el) => {
    return el % 2 == 0;
})
console.log(even);