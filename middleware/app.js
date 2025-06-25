const { log } = require("console");
const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");
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
    throw new ExpressError(404, "ACESS DENIED!");
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
app.get("/err", (req, res) => {
  abc = abd;
});

app.get('/admin',(req,res)=>{
  throw new ExpressError(403,"acess to admin is forbidden")
})

app.use((err, req, res, next) => {
  let { status =500, message= "some error occure" } = err;
  res.status(status).send(message);
});

// Middleware to handle 404 errors
// This should be the last middleware in the stack
app.use((req, res) => {
  res.status(404).send("page not found");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
