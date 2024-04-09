const express=require("express");
const app =express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");



app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect('mongodb://localhost:27017/hotelsystem')
const notesSchema={
    firstName:String,
    email:String,
    message:String

}
const Note =mongoose.model("Note",notesSchema);
app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html");
})
app.post("/",function(req,res){
    let newNote=new Note({
        fisrtName:req.body.firstName,
        email:req.body.email,
        message:req.body.message
    });
    newNote.save();
    res.redirect('/');
})
app.listen(5500,function(){
    console.log("server is running on 5500");
})