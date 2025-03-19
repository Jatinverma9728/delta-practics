const { dir, dirxml } = require("console");
const express = require("express");
const app = express();
console.dir(app);
let port = 3000;

app.listen(port, () => {
  console.log(`app is listning on prot ${port}`);
});

// app.use((req, res) => {
//   console.log(req);
//   let code = "<h1>fruits</h1> <ul><li>orange</li><li>apple</li></ul> ";
//   res.send(code);
//   console.log("request recived");
// });

app.get("/", (req, res) => {
  res.send("you connected to the route path");
});
// app.get("/jatin", (req, res) => {
//   res.send("you are on jatin path");
// });
// app.get("/vaishnavi", (req, res) => {
//   res.send("you connected vaishnavi path");
// });

// app.get("*", (req, res) => {
//   res.send("this path is not valid");
// });
// app.post("/", (req, res) => {
//   res.send("you sent a post request to route");
// });

// ----------installing nodemon--------------

// to automatically restart with code changes

// -------Querry string-----------

// https://www.google.com/search?q=apple&rlz
//  in this url there is a after the url there is a search is equal to something. so the search = something is the querry string.

app.get("/search", (req, res) => {
  let { q } = req.query;
  if(!q){
    res.send(`<h1>nothing searched</h1>`)
  }
  res.send(`<h1>Search result ${q}</h1>`);
});

//http://localhost:3000/search?q="apple"
//http://localhost:3000/search?q="apple"&"red"
