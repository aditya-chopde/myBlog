const express = require("express")
const Post = require("../models/post");
const { handleCreatePost, showPosts } = require("../controlers/post");
const router = express()

router.post("/create", handleCreatePost)
router.get("/allposts", showPosts)

module.exports = router;