const express = require("express");
const _ = require("lodash");
const Post = require("../models/post")

const router = express.Router();

const posts = [];

router.get("/", (req,res) => {
    // TODO async/await
    /*Post.find({title: "day1"}, (err, allPosts) => {
        if(err)
            console.log(err);
        console.log(allPosts);
        
        });
    });*/
    res.render("home.ejs", {
        homeText: "welcome",
        posts: posts});
    
})

router.get("/about", (req,res) => {
    res.render("about.ejs", {aboutText: "about page"});
})

router.get("/contact", (req,res) => {
    res.render("contact.ejs", {contactText: "contact info"});
})

router.get("/styl.css", (req,res) => {
    return readFile()
    res.render("contact.ejs", {contactText: "contact info"});
})

router
    .get("/compose", (req,res) => {
        res.render("compose.ejs");
    })
    .post("/compose", (req,res) => {
        const post = {
            title: req.body.postTitle,
            content: req.body.postBody
        };
        console.log(post);
        // TODO async/await
        //post.save;
        posts.push(post);
        res.redirect("/");
    })

router.get("/posts/:postId", (req, res) => {
    const {postId} = req.params;
    posts.forEach(post => {
        if(_.lowerCase(post.title) === _.lowerCase(postId))
            res.render("post.ejs", {post: post});
    })
})

module.exports = router;