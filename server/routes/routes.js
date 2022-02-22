const express = require('express')
const routes = express.Router()
const controller = require('../controllers/controller')
const services = require('../services/render')

routes.get('/', services.home_route)
routes.route('/api/users').post(controller.create)

module.exports = routes