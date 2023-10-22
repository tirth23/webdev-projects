const express = require("express");
// const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent = "Welcome to Blog Website. Please select compose to start creating new Blog. Have a Happy Day!...👆👆";
const aboutContent = "Hello!, My name is Tirth. I am Software Engineer and developed blog website for sharing useful information.";
const contactContent = "Please Reach us tirth@gmail.com for more information.";

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let posts = [];

app.get("/", function (req, res) {
	res.render("home", { 
		startingContent: homeStartingContent,
		posts: posts 
	});
});

app.get("/about", function (req, res) {
	res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", function (req, res) {
	res.render("contact", { contactContent: contactContent });
});

app.get("/compose", function (req, res) {
	res.render("compose");
});

app.post("/compose", function (req, res) {
	const post = {
		title: req.body.postTitle,
		content: req.body.postBody
	};
	posts.push(post);
	res.redirect("/");
});

app.get("/posts/:postName", function(req, res){
	const requestedTitle = _.lowerCase(req.params.postName);

	posts.forEach(function(post) {
		const storedTitle = _.lowerCase(post.title);

		if(requestedTitle === storedTitle) {
			res.render("post", {title: post.title, content: post.content})
		} 
	})
	
})

app.listen(3000, function () {
	console.log("Server started on port 3000");
});
