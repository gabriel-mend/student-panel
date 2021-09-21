const express = require('express')

const routes = express.Router()

const StudentController = require('./controllers/StudentController')

routes.get('/students', StudentController.index)
routes.post('/students', StudentController.create)
routes.put('/students/:id', StudentController.update)

module.exports = routes