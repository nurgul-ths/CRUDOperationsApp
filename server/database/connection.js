const res = require('express/lib/response')
const mongoose = require('mongoose')
const connectDB = async() => {
    try{
        const con = await mongoose.connect(process.env.MONGO_URL, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useFindAndModify:false,
            // useCreateIndex:true
        })
        console.log(`connected! ${con.connection.host}`)
    }catch (err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB