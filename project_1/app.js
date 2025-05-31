const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
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
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
// root api

app.get("/", (req, res) => {
  res.send("this is root directory");
});

// home page
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

// show route

app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listing/show.ejs", { listing });
});

// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "verma villa",
//     description: "front of beach sea view ",
//     price: 1200,
//     location: "swali beach",
//     Countery: "India",
//   });

//   await sampleListing.save();
//   console.log("sample page");
//   res.send("this is sample listing page");
// });

app.listen(5000, () => {
  console.log("server is listening to port 5000🚀");
});
