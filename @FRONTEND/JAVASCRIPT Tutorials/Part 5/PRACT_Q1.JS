
// Stepwise method to create random number
// let step1= Math.random();
// let step2=step1*10;
// let step3= Math.floor(step2);
// let step4=step3+1;
// console.log(step1);
// console.log(step2);
// console.log(step3);
// console.log(step4);


// shorthand for above statements is
let rnd = Math.floor(Math.random() * 10) + 1;
console.log(rnd);


// Quetion 1)Random numbers from 1 to 100;
let rnd2 = Math.floor(Math.random() * 100) + 1;
console.log(rnd2);


//Question 2) Random number from 1 to 5:
let rnd3 = Math.floor(Math.random() * 5) + 1;
console.log(rnd3);

//Question 2) Random number from 21 to 50:
let rnd4 = Math.floor(Math.random() * 30) + 21;
console.log(rnd4);
