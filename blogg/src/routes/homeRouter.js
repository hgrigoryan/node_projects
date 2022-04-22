const express = require("express");
const Post = require("../models/post")

const router = express.Router();

router.get("/", (req,res) => {
    // TODO async/await
    Post.find({}, (err, allPosts) => {
        if(err){
            console.log(err);
        }
        res.render("home.ejs", {
            homeText: "welcome",
            posts: allPosts});
     });
    
})

router.get("/about", (req,res) => {
    res.render("about.ejs", {aboutText: "about page"});
})

router.get("/contact", (req,res) => {
    res.render("contact.ejs", {contactText: "contact info"});
})

router
    .get("/compose", (req,res) => {
        res.render("compose.ejs");
    })
    .post("/compose", (req,res) => {
        // const options = {year: 'numeric', month: 'long', day: 'numeric' };
        // const date = new Date().toLocalDateString('en-GB', options);

        const post = new Post({
            title: req.body.postTitle,
            content: req.body.postBody,
        });
        // TODO async/await
        post.save((err) => {if(err){console.log("+++",err)};});
        res.redirect("/");
    })

router.get("/posts/:postId", (req, res) => {
    const {postId} = req.params;
    // TODO asinc/await
    Post.findById(postId, (err, post) => {
        if(err){
            console.log(err);
        }
        
        res.render("post.ejs", {post: post});
     });
    
})

module.exports = router;