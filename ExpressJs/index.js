const { dir, dirxml } = require("console");
const express = require("express");
const app = express();
console.dir(app);
let port = 3000;

app.listen(port, () => {
  console.log(`app is listning on prot ${port}`);
});

app.use((req, res) => {
  console.log(req);
  let code = "<h1>fruits</h1> <ul><li>orange</li><li>apple</li></ul> ";
  res.send(code);
  console.log("request recived");
});
