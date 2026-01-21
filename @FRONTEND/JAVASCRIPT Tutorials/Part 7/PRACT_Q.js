const arrayAverage = (arr) => {
    let total = 0;
    for (let number of arr) {
        total += number;
    }
    return total / arr.length;
};
let arr = [1, 2, 3, 4, 5, 6];
console.log(arrayAverage(arr));
let num = 4;
const isEven = (num) => num % 2 == 0;

let length = 4;
function callback() {
    console.log(this.length);
}
const object = {
    length: 5,
    method(callback) {
        callback();
    },
};
object.method(callback, 1, 2);
const object2 = {
    message: 'Hello, World!',
    logMessage() {
        console.log(this.message);
    }
};
setTimeout(object2.logMessage, 1000);