const express = require("express")
const Post = require("../models/post")
const router = express()

router.post("/create", async (req, res) => {
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
})

module.exports = router;