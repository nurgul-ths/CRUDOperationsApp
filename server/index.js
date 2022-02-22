const express = require('express')
const app = express()
const mongoose = require('mongoose')
const User = require('./models/UserModel')
const routes = require('./routes/routes')

app.use(express.json())
mongoose.connect("mongodb+srv://newuser:Auto123!@cluster0.4we5r.mongodb.net/user-database?retryWrites=true&w=majority", {
    useNewUrlParser: true 
})


app.get('/', async (req, res) => {
    const user = new User({
        name: "Nurgul",
        age: 19
    })

    try{
        await user.save()
        res.send('Insert data')
    } catch(err) {
        console.log(err)
    }
})

// app.use('/', routes)
app.listen(3001, () => {
    console.log('Server running!')
})