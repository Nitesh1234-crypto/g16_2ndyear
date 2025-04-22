const express = require("express");
const app= express();
const mongoose = require('mongoose');
const userRoutes= require("./routes/userRoutes")
const blogRoutes= require("./routes/blogRoutes")
app.use(express.json());
app.set('view engine', 'hbs');
app.get("/",(req,res)=>{
  res.render("home")
})
app.get("/userpage",(req,res)=>{
  res.render("users",{
    name:"Nitesh",
    email:"Nitesh@1234@gmail.com"
  })
})
app.get("/blogpage",(req,res)=>{
  res.render("blogs",{
    title:"My first blog ",
    content:"dsufewiufuewfdsfdshfsdhfsfhdsksdfjdsjf"
  })
})
app.use("/users",userRoutes)
app.use("/blogs",blogRoutes)


mongoose.connect('mongodb://127.0.0.1:27017/g26mondb')
  .then(() => console.log('Connected!'))
  .catch((err)=>console.log(err));
app.listen(2222,(req,res)=>{
    console.log("server started")
})