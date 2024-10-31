const mongoose = require("mongoose")

const labelSchema = new mongoose.Schema({
    labelName: {
        type: String,
        required: true,
    },
},{ 
    timestamps: true
})

const Label = mongoose.model("Lable", labelSchema)

module.exports = Label;
