const express = require("express");
const app = express();
const mongoose = require("mongoose");
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

app.listen(5000, () => {
  console.log("server is listening to port 5000🚀");
});
