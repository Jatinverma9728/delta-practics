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

