// Favorite Movie guess Game?
let favMovie = "ramayan";
let guess = prompt("Enter my favorite movie:");
while ((guess != favMovie) && (guess != "quite")) {
    guess = prompt("Wrong guess!,Please Retry again!");
}

if (guess == favMovie) {
    alert("Congratualations!");
} else {
    alert("You Quit!")
}

