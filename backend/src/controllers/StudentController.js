const knex = require('../database')

module.exports = {
  async index(req, res, next) {
    try {
      const results = await knex('students')
        .join('courses', 'courses.id', '=', 'students.course_id')
        .select('students.*', 'courses.name')

      return res.json(results)
    } catch(error) {
      next(error)
    }
  },
  async create(req, res, next) {
    try {
      const {
        username,
        email,
        cep,
        cpf,
        phone,
        andress,
        course_id
      } = req.body

      await knex('students').insert({ username, email, cep, cpf, phone, andress, course_id })

      return res.status(201).send()
    } catch(error) {
      next(error)
    }
  },
  async update(req, res, next) {
    try {
      const {
        username,
        email,
        cep,
        cpf,
        phone,
        andress,
        course_id
      } = req.body

      const { id } = req.params

      await knex('students').update({ 
        username, 
        email, 
        cep, 
        cpf, 
        phone, 
        andress,
        course_id
      }).where({ id })
      return res.send()
    } catch(error) {
      next(error)
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params
      
      await knex('students')
        .where({ id: id })
        .del()

      return res.send()
    } catch(error) {
      next(error)
    }
  },
  async getStudent(req, res, next) {
    try {
      const { id } = req.params

      const student = await knex('students').where({ id })

      return res.send(student[0])
      
    } catch(error) {
      next(error)
    }
  }
}