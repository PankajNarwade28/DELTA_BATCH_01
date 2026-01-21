let str="apple";
if ((str[0]==='a')&&(str.length>3)){
    console.log("this is the good string ")
}
else{
    console.log("This is not a good string")
}
let num= 12;
if ((num%3==0)&&((num+1===15)||(num-1===11))){
  console.log(
    "This is Safe"
  )
}else{
    console.log(
        "This is not Safe"
    )
}

let day= 3;
switch(day){
  case 1: 
  console.log("Monday")
  break;
  case 2: 
  console.log("Tuesday")
  break;
  case 3: 
  console.log("Wednesday")
  break;
  case 4: 
  console.log("Thursday")
  break;
  case 5: 
  console.log("Friday")
  break;
  case 6: 
  console.log("Saturday")
  break;
  case 7: 
  console.log("Sunday")
  break;
  default:
    console.log("Wrong day")
}