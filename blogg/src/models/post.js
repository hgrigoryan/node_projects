const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
                    title: {type: String, required: true},
                    content: {type: String, required: true},
                    date: {type: Date, default: Date.now},
                    author: {
                                name: {type: String, required: true, index: true},
                                userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
                            }
                    },
                    { collection: 'posts', strict: false }
)

//postSchema.index({userId: 1});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;