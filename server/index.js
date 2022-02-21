const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://newuser:Auto123!@cluster0.4we5r.mongodb.net/user-database?retryWrites=true&w=majority", {
    useNewUrlParser: true
})

app.listen(3001, () => {
    console.log('Server running!')
})