const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}))

app.use("/", async (req, res)=>{
    res.json({success: true, message: "API Working"})
})

app.listen(3000, ()=>{
    console.log("Server Started at http://localhost:3000/")
})