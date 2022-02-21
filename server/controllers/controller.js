const UserModel = require('../models/UserModel')

exports.create = async (req, res) => {
    if (!req.body) {
        console.log('Can not be empty')
    }

}