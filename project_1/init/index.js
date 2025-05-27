const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

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

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data was initializes");
};

initDB();
