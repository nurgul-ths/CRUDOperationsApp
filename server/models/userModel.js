const mongoose = require('mongoose')
const validator = require('validator')

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must have name'],
    },
    email: {
        type: String,
        required: [true, 'Must have email'],
        unique: true,
        validate: [validator.isEmail, 'Must have real email']
    },
    gender: {
        type: String,
    },
    status: {
        type: String
    }
})

const userModel = mongoose.model('userdb', schema)
module.exports = userModel