const express = require('express')

const routes = express.Router()

const StudentController = require('./controllers/StudentController')

routes.get('/students', StudentController.index)
routes.post('/students', StudentController.create)

module.exports = routes