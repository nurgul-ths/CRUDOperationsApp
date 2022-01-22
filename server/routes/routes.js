const express = require('express')
const routes = express.Router()
const services = require('../services/render')
const controllers = require("./../controllers/controller")

routes.get('/', services.home_route)
routes.get('/add-user', services.add_user)
routes.get('/update-user', services.update_user)
// routes.post('/api/users', controllers.create)
// routes.get('/api/users', controllers.find)
// routes.delete('/api/users/:id', controllers.delete)
// routes.put('/api/users/:id', controllers.update)
// routes.get('/api/users/:id', controllers.findUser)

//api/user
routes.route('/api/users').post(controllers.create).get(controllers.find)
routes.route('/api/users/:id').delete(controllers.delete).patch(controllers.update).get(controllers.findUser)

module.exports = routes