const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        minlength: [3, "Author name must be at least 3 characters long."],
        maxlength: [25, "Author name cannot exceed 25 characters."]

    }
}, {timestamps: true});

module.exports.Author = mongoose.model('Author', AuthorSchema)