// function personMaker(name, age) {
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log(`Hi!,My name is ${this.name}`);
//     },
//   };
//   return person;
// }
// let p1 = personMaker("pankaj", 33);

// Constructor in javascript

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.talk = function () {
//   console.log(`Hello! ,${this.name}`);
// };

// Classes in javascript

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   talk = function () {
//     console.log(`Hello! ,${this.name}`);
//   };
// }
// let p1 = new Person("pankaj", 22);
// let p2 = new Person("sahil", 22);
// console.log(p1);
// console.log(p2);

// Using Inheritance in classes

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk = function () {
    console.log(`Hello! ,${this.name}`);
  };
}
class Student extends Person {
  //class student is inherited from person
  constructor(name, age, marks) {
    super(name, age);
    this.marks = marks;
  }
}
class Teacher extends Person {
  //class teacher is inherited from person
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
}
let p1 = new Teacher("pankaj", 22, "math");
let p2 = new Student("sahil", 22, 66);
console.log(p1);
console.log(p2);

// Example 2
class mammel {
  constructor(name) {
    this.name = name;
  }
  talk() {
    console.log(`Hey!, I am ${this.name}`);
  }
}
class Dog extends mammel {
  constructor(name) {
    super(name);
  }
  bark() {
    console.log("boww......");
  }
}
class Cat extends mammel {
  constructor(name) {
    super(name);
  }
  meow() {
    console.log("mewoo......");
  }
}

let dog = new Dog("jimmy");
let cat = new Cat("Tom");
console.log(dog);
console.log(cat);
