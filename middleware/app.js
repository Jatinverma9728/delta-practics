const { log } = require("console");
const express = require("express");
const app = express();

app.use((req, res, next) => {
  req.responseTime = new Date(Date.now()).toLocaleString();
  console.log(req.method, req.path, req.responseTime);

  // console.log('Middleware function executed');
  next(); // Call the next middleware or route handler
});

// app.use((req, res, next) => {
//     console.log('Another middleware function executed');
//     next(); // Call the next middleware or route handler
// });
const checkToken =
  ("/api",
  (req, res, next) => {
    let { token } = req.query;
    if (token === "giveacess") {
      next();
    }
   throw new Error("ACESS DENIED!");
  });

app.get("/", (req, res) => {
  res.send("Hello, this is rootroute!");
});

app.get("/about", (req, res) => {
  res.send("Hello, this is about route!");
});

app.get("/random", (req, res) => {
  res.send("Hello, this is random route!");
});

app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

// Middleware to handle 404 errors
// This should be the last middleware in the stack
app.use((req, res) => {
  res.status(404).send("page not found");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
