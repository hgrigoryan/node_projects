const Post = require("../models/post")
const {NotFoundError} = require("../utils/HttpError")

async function showAllPosts(req, res){
    try {
        const allPosts = await Post.find({});
        if(allPosts === null){
            throw new NotFoundError;
        }
        res.status("200").render("home.ejs", {
            homeText: "welcome",
            posts: allPosts
        });

    } catch(err) {
        let statusCode = "500";
        let message = "Internal server error."
        if(err instanceof NotFoundError){
            statusCode = err.statusCode;
            message = err.message;
        }
        res.status(statusCode).json({
            error: message
        });
    }
}

module.exports = showAllPosts;