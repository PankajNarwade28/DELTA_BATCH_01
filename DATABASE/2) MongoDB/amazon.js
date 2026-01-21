const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connection is Successful to Amazon ");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://localhost:27017/");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  Price: {
    type: Number,
    required: true,
    min: [1, "Please enter valid price   "],
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
  genre: {
    type: [String],
  },
  mothertongue: {
    type: String,
    default: "Marathi",
  },
});

const Book = mongoose.model("Book", bookSchema);

// const book1 = new Book({
//   title: "Math",
//   author: "SRk",
//   Price: 2311,
// });

// const book3 = new Book({
//   title: "zoology",
//   author: "sskamble",
//   Price: 2311,
//   category: "fiction",
//   genre: ["music", "dance"],
// });

// book3.save().then((res) => {
//   console.log(res);
// });

// const book4 = new Book({
//   title: "zoology",
//   author: "sskamble",
//   Price: 2311,
//   category: "fiction",
//   genre: ["music", "dance"],
// });

// book4.save().then((res) => {
//   console.log(res);
// });

// book1.save().then((res) => {
//   console.log("inserted");
// });

// const book2 = new Book({
//   title: "Science",
//   author: "SRk",
//   Price: 4500,
// });

// book2
//   .save()
//   .then((res) => {
//     console.log("inserted");
//   })
//   .catch((err) => {
//     console.log("Validation occured!");
//     console.log(err);
//     // this will throw an error because we didn't give value for price in book2 as it as ' required:true ' validatore
//   });

// Update with validation
Book.findByIdAndUpdate(
  "666e9e925d886b2f55a59175",
  {
    Price: -15,
  },
  { runValidators: true }
)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors.Price.properties.message);
  });
