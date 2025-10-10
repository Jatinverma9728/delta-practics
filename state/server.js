const express = require('express');
const app = express();
const flash = require('connect-flash');
const session = require('express-session');
const path = require("path");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const path = require("path");

const sessionOptions = {
    secret: "mysuppersecret",
    resave: false,
    saveUninitialized: false
}
app.use(session(sessionOptions));
app.use(flash());

app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;
    console.log(req.session.name);
    req.flash("sucess", "user registered successfully");
    res.redirect('/hello')

});

app.get('/hello', (req, res) => {
    res.render('page.ejs', { name: req.session.name });

})


// app.get("/reqCount", (req, res) => {

//     if(req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count = 1;
//     }
//     res.send(`You sent request a ${req.session.count} times`)

// })


// app.get("/test", (req, res) => {
//     res.send("test success")
//     });





app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});