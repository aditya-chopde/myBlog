const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    image_path: {
        type: String,
        required: true,
    },
    label: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    content: {
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