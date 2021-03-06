const express = require('express')
const app = express()
const mongoose = require('mongoose')
const User = require('./models/UserModel')
const routes = require('./routes/routes')
const axios = require('axios')
const cors = require('cors')

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://newuser:Auto123!@cluster0.4we5r.mongodb.net/user-database?retryWrites=true&w=majority", {
    useNewUrlParser: true 
})


app.post('/insert', async (req, res) => {

    const name = req.body.name
    const age = req.body.age
    const status = req.body.status
    const email = req.body.email

    const user = new User({
        name: name,
        age: age,
        status: status,
        email: email
    })
    try{
        await user.save()
        res.send('Insert data')
    } catch(err) {
        console.log(err)
    }
})

app.get('/read', async (req, res) => {
    User.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})

app.put('/update', async (req, res) => {
    const id = req.body.id
    const newName = req.body.newName
    const newStatus = req.body.newStatus

    try{
        await User.findById(id, (err, upd) => {
            upd.name = newName
            upd.status = newStatus
            upd.save()
            res.send('Update data')
        })
    } catch(err) {
        console.log(err)
    }
})

app.delete('/delete/:id', async (req, res) => {
    await User.findByIdAndRemove(req.params.id).exec()
    res.send("Delete")
})

// app.use('/', routes)
app.listen(3001, () => {
    console.log('Server running!')
})