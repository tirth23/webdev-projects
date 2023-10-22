const express = require("express");

const app = express();

app.get("/", function(req, res) {
    console.log(res);
    res.send("<h1>Helloo</h1>");
})

app.get("/contact", function(req, res) {
    res.send("Contact me at: tirthpatel23");
})

app.get("/about", function(req, res) {
    res.send("My name is Tirth.");
})

app.listen(3000, function () {
    console.log("Server started on port 3000");   
});
