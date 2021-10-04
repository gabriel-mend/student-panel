const bcrypt = require("bcrypt");
const knex = require('../database')

module.exports = {
  async index(req, res) {
    const results = await knex('users')

    return res.json(results)
  },
  async create(req, res, next) {
    try {
      const {
        name,
        email,
        password
      } = req.body

      const salt = await bcrypt.genSalt(10)

      const userPassword = await bcrypt.hash(password, salt)

      await knex('users').insert({ name, email, password: userPassword })

      return res.status(201).send()
    } catch(error) {
      next(error)
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params
      
      await knex('users')
        .where({ id: id })
        .del()

      return res.send()
    } catch(error) {
      next(error)
    }
  }
}