const express = require("express")
const Post = require("../models/post");
const { handleCreatePost, showPosts, handleSinglePost } = require("../controlers/post");
const router = express()

router.post("/create", handleCreatePost)
router.get("/allposts", showPosts)
router.get("/:id", handleSinglePost)

module.exports = router;