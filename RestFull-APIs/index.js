// complete discription of restfull APIs in draw.tldr

// we are make a basic project like quora post (like twitter)

// CRUD (Creat, Read, Update, Delete)

const express = require("express");
const { log } = require("node:console");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require("uuid");


app.set("view engin", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

let posts = [
  {
    id: uuidv4(),
    username: "jatinverma",
    content: "hello this is jatin",
  },
  {
    id: uuidv4(),
    username: "vaishnavi",
    content: "hello this is vaishnavi",
  },
  {
    id: uuidv4(),
    username: "verma",
    content: "hello this is verma",
  },
];

app.listen(port, () => {
  console.log(`Listning to the port: ${port}`);
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4()
  posts.push({id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", { post });
  //   res.send("request is working");
});
