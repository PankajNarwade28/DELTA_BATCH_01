// Practice Q1)
const square = (n) => n * n;

console.log(square(4));
console.log(square(42));
// Practice Q2)

// Setinterval function executes a piece of code repeatly while its 
// interval is cleared by clearInterval function.
let id = setInterval(() => {
    console.log("Hello World!\n");
}, 2000);

setTimeout(() => {
    console.log("Interval Cleared!");
    clearInterval(id);
}, 10000);
