const express = require('express')
const routes = express.Router()
const controller = require('../controllers/controller')
const services = require('')

routes.get('/', services)
routes.route('/api/users').post(controller.create)

