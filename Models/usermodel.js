const mongoose = require('mongoose')

const useSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps:true})

const usermodel = mongoose.model("User", useSchema);

module.exports = usermodel;