const express = require("express");
const { addEmal, getEmails } = require("../controlers/email");
const router = express()

router.post("/add", addEmal)
router.get("/allemails", getEmails);

module.exports = router;