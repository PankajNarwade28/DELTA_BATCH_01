// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any positive number].
//     For example: for array [7, 9, 0, -2] and n=3
//     Print, [7, 9, 0]
let array=[2,3,4,5,6,6,3];
let n=6;
let ans = array.slice(0,n);
console.log(ans);