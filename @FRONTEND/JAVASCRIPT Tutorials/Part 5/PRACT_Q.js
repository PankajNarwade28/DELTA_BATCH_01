// Qs1. Create a program that generates a random number representing a dice roll.[The number should be between 1 and 6].

let dice = Math.floor(Math.random() * 6) + 1;
console.log("Your dice roll is", dice);

// Qs2. Create an object representing a car that stores the following properties for the car: name, model, color. Print the car’s name.

let car = {
    name: "Roles Royal",
    model: "4.0",
    color: "Orange"
}

console.log(car.name);
let student = {
    std1: {
        name: "Pankaj",
        age: 21,
        education: "bca"
    },
    std2: {
        name: "Pallavi",
        age: 23,
        education: "Bcom III"
    },

    std3: {
        name: "Vaibhav",
        age: 23,
        education: "Bcom III"
    }
}
console.log(
    student.std1.name,
    student.std2.name,
    student.std1.age)
 
// Qs3.Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “New York”.
// Add a new property country and set it to the United States

let Person={
    name: "Pankaj",
    age: 21,
    city:"Umarkhed"
}
console.log(Person.city="New York");
console.log(Person);
