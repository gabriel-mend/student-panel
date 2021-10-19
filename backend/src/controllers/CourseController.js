const knex = require('../database')

module.exports = {
  async index(req, res) {
    const results = await knex('courses')

    return res.json(results)
  },
  async create(req, res, next) {
    try {
      const {
        name,
        workload
      } = req.body

      await knex('courses').insert({ name, workload })

      return res.status(201).send()
    } catch(error) {
      next(error)
    }
  },
  async update(req, res, next) {
    try {
      const {
        name,
        workload
      } = req.body

      const { id } = req.params
      

      await knex('courses').update({ 
        name, 
        workload
      }).where({ id })

      return res.send()
    } catch(error) {
      next(error)
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params
      
      await knex('courses')
        .where({ id: id })
        .del()

      return res.send()
    } catch(error) {
      next(error)
    }
  },
  async getCourse(req, res, next) {
    try {
      const { id } = req.params

      const course = await knex('courses').where({ id })

      return res.send(course[0])
      
    } catch(error) {
      next(error)
    }
  }
}