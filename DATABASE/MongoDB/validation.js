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
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const Book = mongoose.model("Book", bookSchema);

const book1 = new Book({
  title: "Pankaj",
  author: "ajdfk",
  price: 4343,
});

book1.save().then(() => {
  console.log("Saved Succeed");
});
