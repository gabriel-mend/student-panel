const express = require('express')

const routes = express.Router()

const StudentController = require('./controllers/StudentController')
const CourseController = require('./controllers/CourseController')
const UserController = require('./controllers/UserController')

//Enitity: Students
routes.get('/students', StudentController.index)
routes.post('/students', StudentController.create)
routes.put('/students/:id', StudentController.update)
routes.delete('/students/:id', StudentController.delete)


// Enitity: Courses
routes.get('/courses', CourseController.index)
routes.post('/courses', CourseController.create)
routes.put('/courses/:id', CourseController.update)
routes.delete('/courses/:id', CourseController.delete)

// Enitity: Users
routes.get('/users', UserController.index)
routes.post('/users', UserController.create)
routes.delete('/users/:id', UserController.delete)

module.exports = routes