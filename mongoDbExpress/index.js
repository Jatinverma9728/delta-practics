const express = require('express')
const app = express();
const mongoose = require("mongoose");
const path = require('path')
const Chat= require("./models/chat.js")


app.set('views', path.join(__dirname,'views'))
app.set('view engine','ejs')


main().then(()=>{
    console.log('Database connection successful');
    
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/chatbot");
  }

  let chat1 = new Chat({
    from:'vaishanvi',
    to:'jatin',
    msg:'send me the english assignment',
    created_at:new Date()
  });

  chat1.save().then((res)=>{
    console.log(res);
    
  })


app.get('/',(req,res)=>{
    res.send('root is working')
})
app.listen(5000,()=>{
    console.log('server is running on port 5000');
    
})