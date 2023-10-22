const express = require("express");
const date = require(__dirname + "/date.js"); 

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    
    const day = date.getDate();
    res.render("list", { listTitle: day, newListItems: items }); //will check in view folder to render list file
});

app.post("/", function (req, res) {
    // console.log(req.body);

    const item = req.body.newItem;
    if(req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work"); 
    } else {
        items.push(item);
        res.redirect("/");
    } 
});

app.get("/work", function(req, res) {
    res.render("list", {listTitle: "Work Title", newListItems: workItems});
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
