const Post = require("../models/post")

async function showAllPosts(req, res){
    try {
        const allPosts = await Post.find({});
        if(allPosts === null){
            res.status("204");
        }
        res.status("200");
        res.render("home.ejs", {
            homeText: "welcome",
            posts: allPosts});

    }catch(err){
        res.ststus("500").json({
            error: "Internal server error."
        });
    }
}

module.exports = showAllPosts;