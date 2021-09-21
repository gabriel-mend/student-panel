const knex = require('../database')

module.exports = {
  async index(req, res) {
    const results = await knex('students')

    return res.json(results)
  },
  async create(req, res, next) {
    try {
      const {
        username,
        email,
        cep,
        cpf,
        phone,
        andress
      } = req.body

      await knex('students').insert({ username, email, cep, cpf, phone, andress })

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
        andress
      } = req.body

      const { id } = req.params

      await knex('students').update({ 
        username, 
        email, 
        cep, 
        cpf, 
        phone, 
        andress 
      }).where({ id })
      return res.status(201).send()
    } catch(error) {
      next(error)
    }
  }
}