const express = require("express");
const { addEmal, getEmails, deleteEmails } = require("../controlers/email");
const router = express()

router.post("/add", addEmal)
router.get("/allemails", getEmails)
router.post("/delete/:id", deleteEmails)

module.exports = router;