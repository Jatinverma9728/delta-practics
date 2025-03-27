const express = require("express");
const app = express();
const port = 8000;

app.use(express.urlencoded({extended:true})) // fron getting data from url it use in for post requestes
app.use(express.json()) // for getting data from json file it use in for post requestes

app.get("/register", (req, res) => {
    let {user, password} = req.query
  res.send(`standard get respoonse. welcome ${user}`);
});
app.post("/register", (req, res) => {
    let{user,password}=req.body;
  res.send(`standard post respoonse. welcome ${user} and ur password is ${password}`);
});
app.listen(port, () => {
  console.log(`listning to the port ${port}`);
});


