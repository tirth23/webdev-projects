const express = require("express");
const mongoose = require("mongoose");
const _ = require("lodash");
const date = require(__dirname + "/date.js"); 

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

mongoose.connect("mongodb+srv://tirthpatel23t:41DSrMqA7NUvkhqS@clustor0.pgnp3s7.mongodb.net/todolistDB");

const itemsSchema = new mongoose.Schema({
    name: String
});

//creates collections namely items from "Item", pass singluar name to get plural collections name
const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
    name: "Welcome to your ToDO list"
});

const item2 = new Item({
    name: "Hit the + button to add new item"
});

const item3 = new Item({
    name: "<-- Hit thid to delete"
});

const defaultItems = [item1, item2, item3];

const listSchema = {
    name: String,
    items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);

app.get("/", function (req, res) {

    Item.find()
    .then((foundItems) => {
        if(foundItems.length === 0) {
            Item.insertMany(defaultItems)
            .then(function() {
                console.log("Succesfully saved default items to DB.");
            })
            .catch(function(err) {
                console.log(err);
            });
            res.redirect("/");
        } else {
            res.render("list", { listTitle: "Today", newListItems: foundItems }); 
        }
    })
    .catch((err) => console.log(err));

    
});

app.get("/:customListName", function (req, res) {
    const customListName = _.capitalize(req.params.customListName);
   
    List.findOne({ name: customListName })
      .then(function (foundList) {
        if (!foundList) {
          const list = new List({
            name: customListName,
            items: defaultItems,
          });
          list.save();
          res.redirect("/" + customListName);
        } else {
          res.render("list", {
            listTitle: foundList.name,
            newListItems: foundList.items,
          });
        }
      })
      .catch(function (err) {});
});

app.post("/", function (req, res) {
    // console.log(req.body);

    const itemName = req.body.newItem;
    const listName = req.body.list;

    const item = new Item({
        name: itemName
    });

    if(listName === "Today") {
        item.save();
        res.redirect("/");
    } else {
        List.findOne({ name: listName })
        .then(function (foundList) {
        foundList.items.push(item);
        foundList.save();
        res.redirect("/" + listName); 
        })
    }
});

app.post("/delete", function(req, res){
 
    const listName =  req.body.listName;
    const checkItemId =  req.body.checkbx;
   
    if(listName == "Today"){
      deleteCheckedItem();
    }else{
      
      deleteCustomItem();
    }
   
    async function deleteCheckedItem(){
      await Item.deleteOne({_id : checkItemId});
      res.redirect("/");
    }
   
    async function deleteCustomItem(){
      await List.findOneAndUpdate(
        {name : listName},
        {$pull : {items : {_id : checkItemId} }}
        );
      res.redirect("/"+listName);
    }
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
