let msg = "   Help!"
console.log(msg)
console.log(msg.trim().toUpperCase());
let str = "ApnaCollege"
console.log(str.slice(0, 4));
console.log(str.indexOf('na'));
console.log(str.replace("Apna", "Our"));
console.log(str.slice(4).replace("l", "t").replace("l", "t"));



// for Practice Questions 2
let month1 = ["january", "july", "march", "august"];
console.log("before any Operation", month1);
month1.shift();
month1.shift();
month1.unshift("june");
month1.unshift("july");
console.log("After some Operations", month1);

//For Practice Questions 3
let month2 = ["january", "july", "march", "august"];
month2.splice(0, 2, "july", "june");
console.log("After splice Operations", month2);


let lang1 = ["c", "cpp", "html", "javascript", "python", "java", "c#", "sql"];
console.log("the reversed string is ",lang1.reverse());
console.log("the position of 'javascript' in given string is",lang1.indexOf("javascript"));

let lang = ["c", "cpp", "html", "javascript", "python", "java", "c#", "sql"];
console.log("By direct Method", lang.reverse().indexOf("javascript"));

let game=[["X",null,"O"],[null,"X",null],["O",null,"X"]];
console.log(game);
// To change value of null from 1st Array
game[0][1]="O";
console.log(game);
