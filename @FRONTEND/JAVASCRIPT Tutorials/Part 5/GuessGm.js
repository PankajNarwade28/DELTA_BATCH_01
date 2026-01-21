let max = prompt("Enter Your Maximum range !");

let random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Enter Your guess:");
while (true) {
    if (guess == "quit"||max=="quit") {
        console.log("Quitting the app!");
        break;
    }
    if (guess == random) {
        alert("Congratulations! , You are right."  );
        console.log("Your guess is correct!",guess);
        break;
    } else if (guess > random) {
        console.log("Your guess is",guess);
        guess = prompt("Too large!,Come closure & Try again:");
    } else {
        console.log("Your guess is",guess);
        guess = prompt("Too Small!,Come closure & Try again:");
    }
}
