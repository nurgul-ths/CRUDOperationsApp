const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

const SingleUser = mongoose.model("User", UsersSchema)
module.exports = SingleUser