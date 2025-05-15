const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("connection sucessull");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// schema / Modeles

// schema defines the shape of the documents within the collection

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

//Models in mongoose is a class with which we construct documents.

// const User = mongoose.model("User", userSchema); //users
const Employee = mongoose.model("Employee", userSchema); //users

// inserting data

const User = mongoose.model("User", userSchema);

const user1 = new User({
  name: "Jatin",
  email: "Jatinverma9728@gmail.com",
  age: 22,
});
const user2 = new User({
  name: "vaishnavi",
  email: "vaishnavisharma9123@gmail.com",
  age: 20,
});

// saving this data to mongo db

user1.save();
user2
  .save()
  .then((res) => {
    console.log("sucessfully data add to the db", res);
  })
  .catch((err) => {
    console.log(err);
  });

// insterting multiple data

User.insertMany([
  { name: "JatinVerma", email: "vermajatin477@gmail.com", age: 22 },
  { name: "Vaishnavi", email: "Vaishnavi@gmail.com", age: 22 },
  { name: "verma", email: "verma@gmail.com", age: 22 },
  { name: "bulbul", email: "bulbul@gmail.com", age: 22 },
]).then((data) => {
  console.log(data);
});


// NOTE:  mongoose use operation buffering

// mongoose lets you start using your models immediately, without waiting for mongoose to establish a connection to mongodb


// Find in mongoose
