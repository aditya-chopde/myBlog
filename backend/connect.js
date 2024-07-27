const { default: mongoose } = require("mongoose")
const mogoose = require("mongoose")

function connectDb(url){
    return mongoose.connect(url);
}

module.exports = {
    connectDb,
}