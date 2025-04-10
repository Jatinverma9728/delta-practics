// complete discription of restfull APIs in draw.tldr

// we are make a basic project like quora post (like twitter)

// CRUD (Creat, Read, Update, Delete)

const express = require("express");
const { log } = require("node:console");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.set("view engin", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

let posts = [
  {
    id: uuidv4(),
    username: "jatinverma",
    content: "hello this is jatin",
    image:
      "https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_960_720.png",
  },
  {
    id: uuidv4(),
    username: "vaishnavi",
    content: "hello this is vaishnavi",
    image:
      "https://cdn.pixabay.com/photo/2020/11/19/14/03/woman-5758660_1280.jpg",
  },
  {
    id: uuidv4(),
    username: "verma",
    content: "hello this is verma",
    image:
      "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

app.listen(port, () => {
  console.log(`Listning to the port: ${port}`);
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content, image } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content, image });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", { post });
  //   res.send("request is working");
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  console.log(post);
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
});
