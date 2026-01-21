const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => {
    console.log("Connection succeed!");
  })
  .catch((err) => {
    console.log("Error while Connecting!");
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/college");
}

const userSchema = new Schema({
  name: String,
  email: String,
  marks: Number,
});

const User = mongoose.model("User", userSchema);

// const user1 = new User({
//   name: "pankaj",
//   email: "pankaj@gmail.com",
//   marks: 44,
// });

// user1.save().then(() => {
//   console.log("Saved  user1");
// });

// User.insertMany([
//   {
//     name: "atharv",
//     email: "atharv@gmail.com",
//     marks: 34,
//   },
//   {
//     name: "prathmesh",
//     email: "prathmesh@gmail.com",
//     marks: 39,
//   },
//   {
//     name: "vijay",
//     email: "vijay@gmail.com",
//     marks: 14,
//   },
// ]).then(() => {
//   console.log("all records inserted successfully");
// });

// User.deleteOne({ name: "pankaj" }).then((res) => {
//   console.log(res);
// });
