const Post = require("../models/post");

async function handleCreatePost(req, res){
    try {
        const body = req.body;
        const createPost = await Post.create({
            title: body.title,
            description: body.description,
            content: body.content,
            time:  new Date().toLocaleString('en-GB', { timeZone: 'UTC' })
        })

        res.json({ success: true, message: "Post Created Successfully", Post: createPost })

    }catch(err){
        res.json({success: false, message: "Error Occurred", error: err})
    }
}

async function showPosts(req, res){
    try{
        const showPosts = await Post.find({})
        res.json({success: true, posts: showPosts})
    }catch(err){
        res.json({success: false, message: "Error Occurred", error: err})
    }
}

async function handleSinglePost(req, res){
    try{
        const id = req.params.id;
        const showPost = await Post.findById(id);
        res.json({success: true, post: showPost})

    }catch(err){
        res.json({success: true, message: "Error Occurred", error: err})
    }
}

module.exports = {
    handleCreatePost,
    showPosts,
    handleSinglePost,
}