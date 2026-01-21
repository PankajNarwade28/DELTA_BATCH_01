const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => {
    console.log("Connection Succeed");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

// const userSchema = new Schema({
//   username: String,
//   addresses: [
//     {
//       _id: false,
//       location: String,
//       city: String,
//     },
//   ],
// });

// const User = mongoose.model("User", userSchema);

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const addOrders = async () => {
  let results = await Order.insertMany([
    { item: "Samosa", price: 3500 },
    { item: "Chips", price: 5500 },
    { item: "Banana", price: 6500 },
  ]);

  console.log(results);
};

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});
const Order = mongoose.model("Order", orderSchema);
const Customer = new mongoose.model("Customer", customerSchema);

// const addCustomers = async () => {
//   let cust1 = new Customer({
//     name: "Pankaj Narwade",
//   });

//   let order1 = await Order.findOne({ item: "Chips" });
//   let order2 = await Order.findOne({ item: "Samosa" });
//   //   console.log(order1);
//   //   console.log(order2);

//   cust1.orders.push(order1);
//   cust1.orders.push(order2);

//   let result = await cust1.save();
//   console.log(result);
// };

// addCustomers();

const findCustomers = async () => {
  let result = await Customer.find({}).populate("orders");
  console.log(result[0]);
};

findCustomers();
// addOrders();

// const addUsers = async () => {
//   let user1 = new User({
//     username: "Pankaj Narwade",
//     addresses: [
//       {
//         location: "Khilarewadi",
//         city: "Pune",
//       },
//       {
//         location: "Bittergaon",
//         city: "Umarkhed",
//       },
//     ],
//   });
//   let result = await user1.save();
//   console.log(result);
// };

// addUsers();
