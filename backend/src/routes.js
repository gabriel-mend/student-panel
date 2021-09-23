const express = require('express')

const routes = express.Router()

const StudentController = require('./controllers/StudentController')
const CourseController = require('./controllers/CourseController')

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

module.exports = routes