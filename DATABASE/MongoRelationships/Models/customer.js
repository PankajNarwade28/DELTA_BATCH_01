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

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

customerSchema.pre("findOneAndDelete", async () => {
  console.log("PRE MIDDLEWARE");
});

customerSchema.post("findOneAndDelete", async (customer) => {
  //   console.log("POST MIDDLEWARE");
  if (customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(res);
  }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = new mongoose.model("Customer", customerSchema);

const addCustomers = async () => {
  //   let cust1 = new Customer({
  //     name: "Atharv Darp",
  //   });
  let cust = await Customer.findById("680c82ea59f931e8438fda29");
  //   console.log(cust);
  let newOrder = new Order({ item: "BananaChips", price: 30 });
  cust.orders.push(newOrder);
  await newOrder.save();
  await cust.save();
};

// addCustomers();

const delCust = async () => {
  let result = await Customer.findByIdAndDelete("680c82ea59f931e8438fda29");
  console.log(result);
};

delCust();
