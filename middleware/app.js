const express = require('express');
const app = express();


app.use((req, res, next) => {
    console.log('Middleware function executed');
    next(); // Call the next middleware or route handler
})

app.use((req, res, next) => {
    console.log('Another middleware function executed');
    next(); // Call the next middleware or route handler
});

app.get("/", (req, res) => {
  res.send("Hello, this is rootroute!");
});
app.get("/about", (req, res) => {
  res.send("Hello, this is about route!");
});



app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

