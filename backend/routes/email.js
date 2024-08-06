const express = require("express");
const { addEmal } = require("../controlers/email");
const router = express()

router.post("/add", addEmal)

module.exports = router;