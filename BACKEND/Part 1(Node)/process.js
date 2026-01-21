// let n = 5;
// for (let i = 0; i < n; i++) {
//   console.log("hello ", i);
// }

// console.log("Bye!");

let arg = process.argv;
// console.log(arg);

for (let i = 2; i < arg.length; i++) {
  console.log("hello ", arg[i]);
}
