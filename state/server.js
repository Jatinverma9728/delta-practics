const express = require('express');
const app = express();

const session = require('express-session');

const sessionOptions = {
    secret: "mysuppersecret",
    resave: false,
    saveUninitialized: false
}
app.use(session(sessionOptions));

app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;
    console.log(req.session.name);
    res.redirect('/hello')

});

app.get('/hello', (req, res) => {
    res.send(`hello, ${req.session.name}`)

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