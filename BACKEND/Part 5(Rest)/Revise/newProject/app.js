const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.listen(1010, () => {
  console.log(`App is listening at http://localhost:${1010}/`);
});
