const { findByIdAndUpdate } = require('./../models/userModel')
const userModel = require('./../models/userModel')
const catchAsync = require('./catchAsync')

exports.create = async (req, res) => {
    if (!req.body) {
        res.status(400).json({
            status: 'fail',
            message: "Can not be empty"
        })
    }
    // If user creates post request without body,
    // exit from the method

    // If user creates post request with body,
    // make new instance of user model

    // create new user instance
    const user = await new userModel({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })


    // save user instance in database
    user.save(user).then(data => 
        { 
            res.redirect('/add-user')
        }).
        catch(err => {
            res.status(500).send({
                message: err.message || "Error!"
            })
    })
}

exports.find = catchAsync(async (req, res) => {
    // userModel.find().then(user => {
    //     res.send(user)
    // }).catch(err => {
    //     res.status(500).send({
    //         message: err.message || "Error!"
    //     })
    // })
    const users = await userModel.find()
    res.status(200).json({
        status: "success",
        data: users
    })
})

exports.findUser = catchAsync(async (req, res) => {
    
    const user = await userModel.findById(req.params.id)
    res.status(200).json({
        status:"success",
        data: {
            user
        }
    })
})

exports.update = catchAsync(async (req, res) => {
    if (!req.body) {
        res.status(400).json({
            status: 'fail',
            message: "Can not be empty"
        })
    }

    const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json({
        status: "success",
        data: user
    })
    
})

exports.delete = catchAsync(async (req, res) => {
    await userModel.findByIdAndDelete(req.params.id)
    res.status(204).json({
        status: "success",
        data: null
    })
})