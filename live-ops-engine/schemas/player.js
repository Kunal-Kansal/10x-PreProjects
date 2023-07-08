const mongoose = require("mongoose")

const playerschema = new mongoose.Schema({
    playername: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: String,
    mobile: Number
})
const player = mongoose.model("player", userSchema)
module.exports = { player }