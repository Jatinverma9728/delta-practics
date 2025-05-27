const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");

const mongo_URL = "mongodb://127.0.0.1:27017/wonderlust";

main()
  .then(() => {
    console.log("connected to database😊");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(mongo_URL);
}

// root api

app.get("/", (req, res) => {
  res.send("this is root directory");
});

app.get("/testlisting", async (req, res) => {
  let sampleListing = new Listing({
    title: "verma villa",
    description: "front of beach sea view ",
    price: 1200,
    location: "swali beach",
    Countery: "India",
  });

  await sampleListing.save();
  console.log("sample page");
  res.send("this is sample page");
});

app.listen(5000, () => {
  console.log("server is listening to port 5000🚀");
});
