const express = require("express")
const { handleCreatePost, showPosts, handleSinglePost, handelDeletePost, handleCreateLabel, getLabels, getPostLabel } = require("../controlers/post");
const router = express()
const multer = require("multer")
const path = require('path');
const Post = require("../models/post");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads'));
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName)
    }
})

const upload = multer({ storage })

router.post("/create", upload.single('image'), handleCreatePost)
router.post("/create-label", handleCreateLabel);
router.get("/labels", getLabels)
router.get("/labels/:id", getPostLabel)
router.post("/delete/:id", handelDeletePost)
router.get("/allposts", showPosts)
router.get("/:id", handleSinglePost)

module.exports = router;