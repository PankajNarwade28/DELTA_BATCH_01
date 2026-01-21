// Practice Question 1)

function poem() {
    console.log("Johny Johny Yes Papa .")
    console.log("Eating sugar no papa .")
    console.log("Telling lies no papa .")
    console.log("Open your mouth ha ha ha! .")
}
poem();

// Practice Question 2)

function rollDice() {
    console.log(
        (Math.floor(Math.random() * 6)) + 1);
}

rollDice();
rollDice();

// Practice Question 3)

function calAvg(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(avg, "is the average of inputted three numbers.")
}
calAvg(15, 52, 35);
// Practice Question 4)

function mulTable(n) {
    for (let i = 0; i <= 10; i++) {
        console.log(i * n);
    }
}
mulTable(5);
mulTable(44);
// Practice Question 5)

function calSum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(calSum(5));

// Practice Question 6)

let str1 = ["hi", "Hello", "bye", '!'];
function concat(str) {
    let result = "";
    for (i = 0; i < str.length; i++) {
        result += str[i];
    }

    return result;
}

console.log(concat(str1));

// Practice Question 7)

let greet = "Hello!"
function changeGreet() {
    let greet = "Namaste!";
    console.log(greet);
    function innerGreet() {
        console.log(greet);
    }
}
console.log(greet);
changeGreet(); 
