const Post = require("../models/post")

function showComposePage(req, res){
    res.render("compose.ejs");
}

async function saveNewPost(req, res){
    try{
        // const options = {year: 'numeric', month: 'long', day: 'numeric' };
        // const date = new Date().toLocalDateString('en-GB', options);
        const post = new Post({
            title: req.body.postTitle,
            content: req.body.postBody,
        });
        await post.save();
        res.status("201");
        // .json({
        //     message: "Post created successfully.",
        //   });
        res.redirect("/");

    }catch(err){
        res.status("500").json({
            error: "Internal server error."
        });
    }
}

module.exports = {showComposePage, saveNewPost};