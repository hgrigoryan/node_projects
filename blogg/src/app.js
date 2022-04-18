const express = require("express");
const path = require('path');
const ejs = require("ejs");
const _ = require("lodash");
const router = require("./routes/homeRouter");

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const posts = [];

app.get("/", (req,res) => {
    res.render("home.ejs", {
        homeText: "hello everyone",
        posts: posts,
    });
})

app.get("/about", (req,res) => {
    res.render("about.ejs", {aboutText: "about page"});
})

app.get("/contact", (req,res) => {
    res.render("contact.ejs", {contactText: "about page"});
})

app.get("/compose", (req,res) => {
    res.render("compose.ejs");
})

app.post("/compose", (req,res) => {
    const post = {
        title: req.body.postTitle,
        body: req.body.postBody
    };
    posts.push(post);
    res.redirect("/");
})

app.get("/posts/:postId", (req, res) => {
    const {postId} = req.params;
    posts.forEach(post => {
        if(_.lowerCase(post.title) === _.lowerCase(postId))
            res.render("post.ejs", {post: post});
    })
})

app.listen(3000, () => console.log("Starting server on port 3000..."));