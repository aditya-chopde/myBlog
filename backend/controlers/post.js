const path = require("path");
const Post = require("../models/post");
const Label = require("../models/label")
const fs = require('fs')

async function handleCreatePost(req, res) {
    try {
        const { title, content } = req.body;
        const imagePath = `http://localhost:3000/uploads/${req.file.filename}`;
        const createPost = await Post.create({
            title: title,
            image_path: imagePath,
            content: content,
            time: new Date().toLocaleString('en-GB', { timeZone: 'UTC' })
        })

        res.json({ success: true, message: "Post Created Successfully", Post: createPost })
    } catch (err) {
        res.json({ success: false, message: "Error Occurred", error: err })
    }
}

async function showPosts(req, res) {
    try {
        const showPosts = await Post.find({})
        res.json({ success: true, posts: showPosts })
    } catch (err) {
        res.json({ success: false, message: "Error Occurred", error: err })
    }
}

async function handleSinglePost(req, res) {
    try {
        const id = req.params.id;
        const showPost = await Post.findById(id);
        res.json({ success: true, post: showPost })

    } catch (err) {
        res.json({ success: true, message: "Error Occurred", error: err })
    }
}

async function handelDeletePost(req, res) {
    try {
        const id = req.params.id;
        const deletePost = await Post.findByIdAndDelete(id)
        const filePath = path.join(__dirname, `../uploads/${deletePost.image_path}`)
        fs.unlink(filePath, (err)=>{
            if(err){
                return res.json({success: false, message: "Error Deleting File"})
            }
        })
        res.json({ success: true, message: "Post Deleted Successfully", deletedPost: deletePost })

    } catch (err) {
        res.json({ success: false, message: "Error Occurred", error: err })
    }
}

async function handleCreateLabel(req, res){
    try{
        const { labelname } = req.body;
        const createLabel = await Label.create({
            labelName: labelname
        })

        return res.json({success: true, message: "Label created Successfully", label: createLabel});
    }catch(err){
        return res.json({success: false, message: "Error Creating Label", error: err.message});
    }
}

async function getLabels(req, res){
    try{
        const getAllLabels = await Label.find();
        return res.json({success: true, message: "All Labels Fetched Successfully", Labels: getAllLabels});
    }catch(err){
        return res.json({success: false, message: "Error Fetching Labels", error: err.message})
    }
}

module.exports = {
    handleCreatePost,
    showPosts,
    handleSinglePost,
    handelDeletePost,
    handleCreateLabel,

}