const Post = require("../models/post")
const {NotFoundError} = require("../utils/HttpError")

async function findPostById(req, res){
    try{
        const {postId} = req.params;
        const post = await Post.findById(postId);
        if (null === post){
            throw new NotFoundError;
        }

        res.status("200").render("post.ejs", {post: post});

    }catch(err){
        const statusCode = "500";
        const message = "Internal server error."
        if(err instanceof NotFoundError){
            statusCode = err.statusCode;
            message = err.message;
        }
        res.status(statusCode).json({
            error: message
        });
    }
}

module.exports = findPostById;