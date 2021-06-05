const { Schema, model } = require('mongoose')

let contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    }
})

const Contact = model('Contact', contactSchema)

module.exports = Contact