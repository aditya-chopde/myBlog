const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const { connectDb } = require("./connect")
const post = require("./routes/post")
const email = require("./routes/email")

app.use(cors())
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))

//Routes
app.use("/post", post)
app.use("/email", email)

//Connecting Database
connectDb("mongodb://localhost:27017/blog").then(() => {
    console.log("DB Connected")
})

app.get("/", async (req, res) => {
    res.json({ success: true, message: "API Working" })
})

app.listen(3000, () => {
    console.log("Server Started at http://localhost:3000/")
})