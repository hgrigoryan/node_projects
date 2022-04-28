const Post = require("../models/post")

async function findPostById(req, res){
    try{
        const {postId} = req.params;
        const post = await Post.findById(postId);
        if (null === post){
            res.status("404");
            // TODO: error classes needed
            throw Error('Not found');
        }

        res.status("200");
        res.render("post.ejs", {post: post});
    }catch(err){
        res.ststus("500").json({
            error: "Internal server error."
        });
    }
}

module.exports = findPostById;