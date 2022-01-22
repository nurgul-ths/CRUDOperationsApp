const express = require('express')
const axios = require('axios')
const path = require('path')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')
const ejs = require('ejs');
const routes = require('./server/routes/routes')
dotenv.config({path: 'config.env'})
const app = express()
const PORT = process.env.PORT || 8080
const connectDB = require('./server/database/connection')

connectDB()
// request to body parser
app.use(bodyparser.urlencoded({extended:true}))

// log requests
app.use(morgan('tiny'))
app.set('view engine', 'ejs')

// load files
app.use('/css', express.static(path.resolve(__dirname, 'files/css')))
app.use('/img', express.static(path.resolve(__dirname, 'files/img')))
app.use('/js', express.static(path.resolve(__dirname, 'files/js')))

app.use('/', routes)
app.listen(PORT, () => {
    console.log("Listening!")
})
