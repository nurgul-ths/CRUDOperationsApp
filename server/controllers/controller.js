const UserModel = require('../models/UserModel')

exports.create = async (req, res) => {
    if (!req.body) {
        res.status(400).json({
            status: "fail",
            message: "Body can not be empty"
        })
    }

    user = await new UserModel({
        name: req.body.name,
        age: req.body.age
    })

    user.save().then(data => {
        res.send(200).json({
            message: "User added"
        })
    })
}