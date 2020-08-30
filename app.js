const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const app=express();
mongoose.connect("mongodb://localhost:27017/todoDB");
app.use(bodyParser.urlencoded({ extended: true }));
const todoItemsSchema=new mongoose.Schema({
   _id:Number,
    todo:String
});
const Todo=mongoose.model("Todo",todoItemsSchema);


//create a todo item
app.post("/create",function(req,res){
    var todo=req.body.todo;
    var id=req.body.id;
    const newItem=new Todo({
        _id:id,
        todo:todo
    });
    newItem.save();
    res.send("item saved, check list/database");
})

//delete a todo item
app.post("/delete",function(req,res){
    var id=req.body.id;
    
    Todo.deleteOne({_id:id},function(err,foundItem){
        if(!err)
        {
            if(foundItem)
            {
                console.log("deleted");
                res.send("deleted");
            }
            else
            {
                res.send("item doesnt exist");
            }
        }
        else{
            res.send(err);
        }
    })
})


//update a todo item
app.patch("/update",function(req,res){
    let todo=req.body.todo;
    var id=req.body.id;
    Todo.updateOne({_id:id},{$set:{todo:req.body.todo}},function(err){
        if(!err){
            res.send("updated");
        }
        else{
            res.send(err);
        }
    })

})


//list all todo items
app.get("/list",function(err,res){
    list=[];

    Todo.find({},function(err,foundItems){
        if(!err)
        {
            res.json(foundItems);
        }
        else
        {
            res.send(err);
        }

    })
})





app.listen(3000,function(err){
    console.log("server ready");
})