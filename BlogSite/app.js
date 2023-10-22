const express = require("express");
// const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

const homeStartingContent = "Welcome to Blog Website. Please select compose to start creating new Blog. Have a Happy Day!...👆👆";
const aboutContent = "Hello!, My name is Tirth. I am Software Engineer and developed blog website for sharing useful information.";
const contactContent = "Please Reach us tirth@gmail.com for more information.";

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// mongoose.connect("mongodb://127.0.0.1:27017/blogDB");

mongoose.connect("mongodb+srv://tirthpatel23t:41DSrMqA7NUvkhqS@clustor0.pgnp3s7.mongodb.net/blogDB");

const postSchema = {
  title: String,
  content: String
};

const Post = mongoose.model("Post", postSchema);

app.get("/", function (req, res) {
	Post.find()
		.then(function(posts){
		res.render("home", {
		  startingContent: homeStartingContent,
		  posts: posts
		  });
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
	const post = new Post({
		title: req.body.postTitle,
		content: req.body.postBody
	});
	post.save()
	.then(() => res.redirect("/"))
	
});

app.get("/posts/:postId", function(req, res){
	const requestedPostId = req.params.postId;

	Post.findOne({_id: requestedPostId})
	 	.then(function(post){
			res.render("post", {
		  	title: post.title,
		  	content: post.content
		});
	  });
	
})

app.listen(3000, function () {
	console.log("Server started on port 3000");
});
