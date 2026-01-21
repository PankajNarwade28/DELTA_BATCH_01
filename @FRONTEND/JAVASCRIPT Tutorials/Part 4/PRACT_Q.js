let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
let j = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i, 1);
        console.log(`2 is deleted from index ${i + j}`);
        j++;
    }

}
console.log(arr);

// Q2)
// first the number is converted to String

let number = 287152;
let count = 0;
let copy = number;
while (copy > 0) {
    count++;
    copy = Math.floor(copy / 10);
}
console.log(count);

// Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25
let number2 = 287152;
let sum = 0;
let copy2 = number2;
while (copy2 > 0) {
    digit = copy2 % 10;
    sum += digit;
    copy2 = Math.floor(copy2 / 10);
}
console.log(sum);

// Qs4. Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a given positive integer and denoted by that integer. ]
// Example :
// 7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
// 5! (factorial of 5) = 1x2x3x4x5 = 120
// 3! (factorial of 3) = 1x2x3 = 6
// 0! Is always 1

let n = prompt("Enter the number !");
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
}
console.log(`factorial of ${n} is ${factorial}`);


// Qs5. Find the largest number in an array with only positive numbers
let arr2 = [2, 55, 10, 4, 2, 7, 1, 9];
let largest = 0;
for (let i = 0; i <= arr2.length; i++) {
    if (largest < arr2[i]) {
        largest = arr2[i];
    }
}
console.log(largest)