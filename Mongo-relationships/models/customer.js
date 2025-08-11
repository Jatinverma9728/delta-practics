const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => {
    console.log("✅ Connected to database");
  })
  .catch((err) => {
    console.error("❌ Connection Error:", err);
  });

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

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async () => {
  let cust1 = new Customer({
    name: "Jatin verma",
  });

  let order1 = await Order.findOne({ item: "Samosa" });
  let order2 = await Order.findOne({ item: "spring-roll" });
  let order3 = await Order.findOne({ item: "Burger" });
  cust1.orders.push(order1);
  cust1.orders.push(order2);
  cust1.orders.push(order3);

  let result = await cust1.save();
  console.log(result);
};
addCustomer();
// const addOrder = async () => {
//   let res = await Order.insertMany([
//     { item: "Samosa", price: 15 },
//     { item: "spring-roll", price: 30 },
//     { item: "Burger", price: 30 },
//   ]);
//   console.log(res);
// };

// addOrder();


// ++++++++++One to many(one to squillions)
//store a refrence to the parent documnet inside child.