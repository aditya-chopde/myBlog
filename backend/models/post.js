const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true,
    },

}, {
    timestamps: true
})

const Post = mongoose.model("post", PostSchema)

module.exports = Post;