const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is requied']
    },
    description: {
        type: String,
        required: [true, 'description is requied']
    },
    image: {
        type: String,
        required: [true, 'image is requied']
    },
}, { timestamps: true })

const blogModel = mongoose.model("Blog", blogSchema)

module.exports = blogModel;

