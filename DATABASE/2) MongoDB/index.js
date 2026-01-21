const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/");

main()
  .then(() => {
    console.log("Connection Successful!");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://localhost:27017/");
}

// following code is for creation of a Structure of database which consist of some rules and regulations.

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: Number,
  age: Number,
});
// following is for creation of database models(classes) which create s a collection named users into the database

const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);

// const user1 = new User({
//   name: "Soham",
//   contact: 34543434,
//   age: 23,
// });
// user1
//   .save()
//   .then(() => console.log("Inserted!"))
//   .catch((err) => {
//     console.log(err);
//   });

// User.insertMany([
//   {
//     name: "Samarth Avinash Narwade",
//     email: "samarth.com",
//     contact: 232323,
//     age: 15,
//   },
//   {
//     name: "Sarthak Pravin Narwade",
//     email: "sarthak.com",
//     contact: 245454,
//     age: 13,
//   },
// ]).then((data) => {
//   console.log(data);
// });

//  returns first match data from User Collection

// User.findOne({ _id: "666e8662b38b3acdd60fcc2b" })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//   returns all data from User Collection
// User.find({})
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//  returns single data from User Collection by matching id
// User.findById("666e8662b38b3acdd60fcc2b").then((data) => {
//   console.log(data);
// });

//To update many fields from User model at once .

// User.updateMany({ age: 23 }, { email: "automate.com" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//To update single field from User   .

// User.updateOne({ age: 23 }, { email: "automate.com" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//To update single field from User by finding it using given id .

// User.findOneAndUpdate(
//   { name: "Pallavi" },
//   { name: "Pallavi Abhay Choudhari" },
//   { new: true } // this will console new updated object as a result
// )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// find by id and update

// User.findByIdAndUpdate(
//   "666e82b2c5804a4963ec8fa2",
//   { name: "Pankaj Digamber Narwade" },
//   { new: true } // to console new updated data
// )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//delete one

// User.findOneAndDelete({ age: { $gt: 30 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//inserting sample data into collection

// User.insertMany([
//   {
//     name: "sample",
//     email: "sample.com",
//     contact: 43434,
//     age: 343,
//   },
//   {
//     name: "sample2",
//     email: "sample2.com",
//     contact: 43434,
//     age: 343,
//   },
// ]).then((res) => {
//   console.log("inserted");
// });

//deleting data from collection by using condition

// User.deleteMany({ name: "sample" }).then((res) => {
//   console.log(res);
// });

//deleting data from collection by using id

// User.findByIdAndDelete("666e93bd2c3d7797bbec24a1").then((res) => {
//   console.log(res);
// });
