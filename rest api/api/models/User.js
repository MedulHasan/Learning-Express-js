const { Schema, model } = require('mongoose')

const userSchima = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: String
})

const User = model('User', userSchima)

module.exports = User