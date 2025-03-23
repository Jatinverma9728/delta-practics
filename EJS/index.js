// EJS (Embedded JavaScript) is a templating engine for JavaScript, mainly used with Node.js to generate dynamic HTML content. It allows you to embed JavaScript logic directly into HTML using special syntax.

const express = require("express");
const app = express();
const path = require('path')
const port = 3000;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.get("/hello", (req, res) => {
  res.send("this is hello");
});
app.get("/", (req, res) => {
  res.render("home.ejs"); // .ejs extension is optional
});

app.listen(port, () => {
  console.log("listning on port", port);
});


//-----interpolation syntax--------
//Interpolation syntax is a way to insert variables or expressions dynamically to the markup text 