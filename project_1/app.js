const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const mongo_URL = "mongodb://127.0.0.1:27017/wonderlust";
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");
const listings = require("./routes/listing");
const reviews = require("./routes/review");

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
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
// root api

app.get("/", (req, res) => {
  res.send("this is root directory");
});

// home page
// root api
app.get("/", (req, res) => {
  res.send("this is root directory");
});

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews)


// Page not found
app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("listings/error.ejs", { message });
});

app.listen(5000, () => {
  console.log("server is listening to port 5000🚀");
});
