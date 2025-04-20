const { faker, th } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const { log } = require("console");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engin", "ejs");
app.set("views", path.join(__dirname, "/views"));

// connection with mySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "Jatinkumar@123",
});
// gitting some fake data for adding in database for exercise
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// querry inserting new data
// let q = "INSERT INTO usr (id,username,email,password) VALUES ?";

// manually create data
// let users = [
//   ["1263", "123_neuser", "abcg@gmail.com", "abgc"],
//   ["14", "124_newuser", "acd@gmail.com", "abd"],
// ];

// let data = [];
// for (let i = 0; i <= 100; i++) {
//   data.push(getRandomUser()); //100 fake user data
// }

//home route

app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM USR`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in database");
  }
});

// show user's Route

app.get("/user", (req, res) => {
  let q = `SELECT * FROM usr`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("showUsers.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in database");
  }
});

//edit route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM usr WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
      console.log(result);

      // res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in database");
  }
});

// update route

app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM usr WHERE id='${id}'`;
  res.send("updated");
   try {
     connection.query(q, (err, result) => {
       if (err) throw err;
       let user = result[0];
       res.render("edit.ejs", { user });
       console.log(result);

       // res.render("edit.ejs", { user });
     });
   } catch (err) {
     console.log(err);
     res.send("some error in database");
   }
});

app.listen("3000", () => {
  console.log("server is listning to port 3000");
});
