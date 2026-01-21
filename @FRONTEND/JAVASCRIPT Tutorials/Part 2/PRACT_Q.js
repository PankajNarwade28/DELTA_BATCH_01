// // Qs1. Create a number variable num with some value.
// // Now, print “good” if the number is divisible by 10 and print “bad” if it is not.

let num = 20;
if (num % 10 == 0) {
  console.log("This is the Good Number!")
}
else {
  console.log(
    "This is not a Good Number!"
  )
}

// // Q2s Take the user's name & age as input using prompts.
// // Then return back the following statement to the user as an alert(by substituting their name & age) : name is age years old.
// // [Use template Literals to print this sentence]

let userName=prompt("Enter your Name!");
let userAge=prompt("Enter your Age!");
alert("Hello "+ userName + " You are "+userAge+ " Year old.")
console.log(
  "Hello "+ userName + " You are "+userAge+ " Year old."
)
// alert(`$(userName)  is $(userAge) Years old.`);

// // Qs3. Write a switch statement to print the months in a quarter.
// // Months in Quarter 1 : January, February, March
// // Months in Quarter 2 : April, May, June
// // Months in Quarter 3 : July, August, September
// // Months in Quarter 4: October, November, December
 
Quarter= 4;
switch(Quarter){
  case 1:
    console.log("Months in Quarter 1 are: January,February and March.");
    break;
  case 2:
    console.log("Months in Quarter 2 are: April, May and June.");
    break;

  case 3:
    console.log("Months in Quarter 3 are:July , August and Septembar.");
    break;
  case 4:
    console.log("Months in Quarter 4 are:October,Novembar and December.");
    break;
    default:
      console.log("Please Enter a Valid Quarter from 1 to 4 otherwise Go to hell!")
} 
// // Qs4. A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total length greater than 5. For a given string print if it is golden or not.

let str="ple 13 pro Max."
if(((str[0]=="A")||(str[0]=="a"))&&(str.length>5)){
  console.log("The String '"+str+"' is a Golden String!");
}else{
  console.log("The String '"+str+"' is Not a Golden String!");
}
// // Qs5. Write a program to find the largest of 3 numbers
let a=4;
let b=5;
let c=6;
if(a>b){
  if(a>c){
    console.log(a+" is largest number among three!")
  }else{
    console.log(c+" is largest number among three!")
  }
}else{
  if(b>c){
    console.log(b+" is largest number among three!")
  }else{
    console.log(c+" is largest number among three!")
  }
}
// Qs6 (Bonus). Write a program to check if 2 numbers have the same last digit.Eg : 32 and 47852 have the same last digit i.e. 2
let NO1="23232";
let NO2="342";
// console.log(NO1.length)
// console.log(NO1[NO1.length-1])
// console.log(NO2.length)
// console.log(NO2[NO2.length-1])
if(NO1[NO1.length-1]===NO2[NO2.length-1]){
  console.log("The last digit of number "+NO1 +" And "+NO2+" is 2!")
}
else{
  console.log("The last digit of number "+NO1 +" And "+NO2+" is not  2!")

}